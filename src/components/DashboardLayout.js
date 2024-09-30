import React from "react";
import Sidebar from "./Sidebar";
import NavigationBar from "./Navbar";
import { Container } from "react-bootstrap";

const DashboardLayout = ({ title, menuItems, children, onLogout }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <NavigationBar title={title} onLogout={onLogout} />

        {/* Content */}
        <Container className="mt-3">{children}</Container>
      </div>
    </div>
  );
};

export default DashboardLayout;