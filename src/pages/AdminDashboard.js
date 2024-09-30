import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
  const adminMenuItems = [
    { path: "/admin", name: "Admin Dashboard" },
    { path: "/manage-employees", name: "Manage Employees" },
    { path: "/training", name: "Manage Training" }
  ];

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <DashboardLayout title="Admin Dashboard" menuItems={adminMenuItems} onLogout={handleLogout}>
      <h2>Welcome to the Admin Dashboard</h2>
    </DashboardLayout>
  );
};

export default AdminDashboard;