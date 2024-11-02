import React from "react";
import { Link } from 'react-router-dom';
import "./UserManagement.css";

function UserManagement() {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="actions">
      <Link to="/adduser-panel">
        <button>Add New User</button>
      </Link>
        <button>Delete User</button>
        <button>Modify User</button>
        <button>Extra</button>
      </div>
      <div className="search">
        <label>Filter/Search for a User</label>
        <input type="text" placeholder="Search..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Fleet ID</th>
            <th>User Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows dynamically here */}
        </tbody>
      </table>
      <div className="recently-deleted">
        <h3>Recently Deleted/Created Users</h3>
      </div>
      <div className="stats">
        <div>
          <h3>Total Users</h3>
          <p>18</p>
          <p>Active: 17</p>
          <p>Disabled: 1</p>
        </div>
        <div>
          <h3>Total Fleet</h3>
          <p>42</p>
          <p>Assigned: 40</p>
          <p>Active: 31</p>
          <p>Disabled: 11</p>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
