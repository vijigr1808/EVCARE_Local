import React from 'react';
import { Link } from 'react-router-dom';
import './AddUserPanel.css';

const AddUserPanel = () => {
    return (
        <div className="add-user-panel">
            <header className="header">
            <Link to="/user-management">
                <button className="back-button">←</button>
            </Link>
                <h2>Add User Panel</h2>
            </header>
            <div className="main-section">
                <div className="form-section">
                    <label>Name</label>
                    <input type="text" placeholder="Enter name" />

                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />

                    <label>Role</label>
                    <input type="text" placeholder="Enter role" />

                    <label>Generate Random Password</label>
                    <input type="password" placeholder="Generated password" />

                    <label>Assign Fleet</label>
                    <select>
                        <option>Fleet 1</option>
                        <option>Fleet 2</option>
                        <option>Fleet 3</option>
                        {/* Add more fleet options as needed */}
                    </select>

                    <div className="action-buttons">
                        <button className="discard-button">Discard</button>
                        <button className="apply-button">Apply</button>
                    </div>
                </div>
                <div className="stats-section">
                    <div className="user-stats">
                        <h3>Total Users</h3>
                        <p>18</p>
                        <p>Active: 17</p>
                        <p>Disabled: 1</p>
                    </div>
                    <div className="fleet-stats">
                        <h3>Total Fleet</h3>
                        <p>42</p>
                        <p>Assigned: 40</p>
                        <p>Active: 31</p>
                        <p>Disabled: 11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserPanel;
