import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup, Login, AdminDashboard } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/employee" element={<EmployeeDashboard />} /> */}
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/manager" element={<ManagerDashboard />} /> */}
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </Router>
  );
}

export default App;
