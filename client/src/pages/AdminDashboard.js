import React, {useEffect, useState} from "react";
import DashboardLayout from "../components/DashboardLayout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AdminDashboard = () => {
  const adminMenuItems = [
    { path: "/admin", name: "Home" },
    { path: "/employeelist", name: "Manage Employees" },
    { path: "/training", name: "Manage Training" }
  ];

  const [data, setData] = useState(null);

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
      })
      .catch(error => {
        console.error("Error fetching protected route", error.response?.data || error.message);
      });
    } else {
      console.error("No token found, user is not authenticated.");
    }
  }, []);

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    toast.success("Logging out!!")
    setTimeout(() => {
      navigate('/login')
    }, 2000);
    console.log("Logged out");
  };
  console.log(data)

  return (
    <DashboardLayout title="Admin Dashboard" menuItems={adminMenuItems} onLogout={handleLogout} name={data}>
      <h2>Welcome to the Admin Dashboard</h2>
    </DashboardLayout>
  );
};

export default AdminDashboard;