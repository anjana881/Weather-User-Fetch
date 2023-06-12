import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="top-navbar">
        <li>
          <Link to="/dashboard/admin" className="admin-list">
            Admin
          </Link>
        </li>
        <li>
          <Link to="/dashboard/user" className="admin-list">
            User
          </Link>
        </li>
        <li>
          <Link to="/dashboard/weather" className="admin-list">
            Weather
          </Link>
        </li>
      </div>
      <div className="below-content">
        <div className="content">
          Welcome to Dashboard.
          <Outlet />
        </div>
        <div className="right-sidebar">
          <h2>Right-sidebar</h2>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
