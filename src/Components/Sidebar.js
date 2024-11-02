import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EV Care</h2>
      <p>Welcome Back</p>
      <ul>
        <li>User Management</li>
        <li>Fleet Management</li>
        <li>Fitstar</li>
        <li>LPM</li>
        <li>AMS</li>
        <li>ESC</li>
        <li>Other Components with extra features</li>
      </ul>
    </div>
  );
}

export default Sidebar;
