import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AdminTraining = () => {
  const adminMenuItems = [
    { path: "/admin", name: "Home" },
    { path: "/employeelist", name: "Manage Employees" },
    { path: "/training", name: "Manage Training" }
  ];

  const navigate = useNavigate()

  const [data, setData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    duration: '',
    designation: '',
    questions: [{ question: '', answers: ['', '', '', ''], correctAnswer: '' }] // Four answer options
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios.get('http://localhost:8000/api/admin', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setData(response.data);
        fetchCourses(token);
      })
      .catch(error => {
        console.error("Error fetching protected route", error.response?.data || error.message);
      });
    } else {
      console.error("No token found, user is not authenticated.");
    }
  }, []);

  const fetchCourses = (token) => {
    axios.get('http://localhost:8000/api/courses', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setCourses(response.data))
    .catch(error => console.error("Error fetching courses", error));
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logging out!!");
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const handleCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = newCourse.questions.map((q, i) =>
      i === index ? { ...q, [field]: value } : q
    );
    setNewCourse({ ...newCourse, questions: updatedQuestions });
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const updatedAnswers = newCourse.questions[questionIndex].answers.map((ans, i) =>
      i === answerIndex ? value : ans
    );

    const updatedQuestions = newCourse.questions.map((q, i) =>
      i === questionIndex ? { ...q, answers: updatedAnswers } : q
    );

    setNewCourse({ ...newCourse, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setNewCourse({ ...newCourse, questions: [...newCourse.questions, { question: '', answers: ['', '', '', ''], correctAnswer: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    axios.post('http://localhost:8000/api/courses', newCourse, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      toast.success('Course created successfully');
      setCourses([...courses, response.data.course]);
      setNewCourse({
        title: '',
        duration: '',
        designation: '',
        questions: [{ question: '', answers: ['', '', '', ''], correctAnswer: '' }]
      });
    })
    .catch(error => {
        toast.error('Error creating course')
        console.log(error)
    }
);
  };

  return (
    <DashboardLayout title="Training" menuItems={adminMenuItems} onLogout={handleLogout}>
      <h2>Manage Training</h2>

      {/* Course Creation Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={newCourse.title} onChange={handleCourseChange} required />
        </div>
        <div>
          <label>Duration</label>
          <input type="text" name="duration" value={newCourse.duration} onChange={handleCourseChange} required />
        </div>
        <div>
          <label>Designation</label>
          <input type="text" name="designation" value={newCourse.designation} onChange={handleCourseChange} required />
        </div>
        <div>
          {newCourse.questions.map((q, questionIndex) => (
            <div key={questionIndex}>
              <label>Question {questionIndex + 1}</label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(questionIndex, 'question', e.target.value)}
                required
              />
              <label>Answers</label>
              {q.answers.map((answer, answerIndex) => (
                <input
                  key={answerIndex}
                  type="text"
                  placeholder={`Answer ${answerIndex + 1}`}
                  value={answer}
                  onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
                  required
                />
              ))}
              <label>Correct Answer</label>
              <input
                type="text"
                value={q.correctAnswer}
                onChange={(e) => handleQuestionChange(questionIndex, 'correctAnswer', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addQuestion}>Add Question</button>
        </div>
        <button type="submit">Create Course</button>
      </form>

      {/* Course List */}
      <h3>Course List</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title} - {course.duration} hrs - {course.designation}</li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default AdminTraining;
