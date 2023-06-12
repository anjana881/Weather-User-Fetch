import React from "react";
import "./root.css";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <div className="top-navbar">
        <li>
          <Link to="/home" className="admin-list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="admin-list">
            About
          </Link>
        </li>
        <li className="dashboard">
          <Link to="/dashboard" className="admin-list">
            Dashboard
          </Link>
        </li>
      </div>

      <div className="below-content">
        <div className="left-sidebar">
          <h2>Left-Sidebar</h2>
        </div>
        <div className="content">
          <p>
            <Outlet />
          </p>
        </div>
      </div>
    </>
  );
};

export default Root;
