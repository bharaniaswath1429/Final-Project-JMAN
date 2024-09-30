import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  const location = useLocation();

  return (
    <div className="bg-light border-right vh-100" id="sidebar-wrapper">
      <div className="sidebar-heading">Menu</div>
      <div className="list-group list-group-flush">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`list-group-item list-group-item-action ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;