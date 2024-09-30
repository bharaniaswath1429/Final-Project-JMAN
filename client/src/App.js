import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup, Login, AdminDashboard, EmployeeDashboard, ManagerDashboard, AdminTraining } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<ProtectedRoute element={EmployeeDashboard} />} />
          <Route path="/admin" element={<ProtectedRoute element={AdminDashboard} />} />
          <Route path="/manager" element={<ProtectedRoute element={ManagerDashboard} />} />
          <Route path="/training" element={<ProtectedRoute element={AdminTraining} />} />
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
