import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import signupimg from "../images/signup.svg";
import './Signup.css'

const Signup = () => {
  const [userType, setUserType] = useState("employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [designation, setDesignation] = useState("");
  const [reportingManager, setReportingManager] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email || !password || ! employeeID || designation){
        toast.error("Please fill all the fields.");
    }
    if(userType === 'employee' && !reportingManager){
        toast.error("Please fill all the fields.");  
    }
    if(userType !== 'employee'){
       setReportingManager('None')
    }
    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        userType,
        name,
        email,
        password,
        employeeID,
        designation,
        reportingManager,
      });
      console.log(response)
      toast.success("Created user successfully");
    } catch (error) {
      toast.error("Signup failed");
    }
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img src={signupimg} alt="signup img"></img>
        </div>
        <div
          className="col-6 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#6C63FF" }}
        >
          <form
            className="p-3"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "350px",
            }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <h3 style={{ color: "#6C63FF" }}>Signup</h3>
            </div>
            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>Employee ID</label>
              <input
                type="text"
                className="form-control"
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>Designation</label>
              <input
                type="text"
                className="form-control"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>User Type</label>
              <select
                className="form-control"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {userType === "employee" && (
              <>
                <div className="form-group mt-3 mx-2">
                  <label style={{color:'#6C63FF'}}>Reporting Manager</label>
                  <input
                    type="text"
                    className="form-control"
                    value={reportingManager}
                    onChange={(e) => setReportingManager(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="form-group mt-3 mx-2">
              <label style={{color:'#6C63FF'}}>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                <button className="btnsubmit p-2" style={{width:'70%'}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
