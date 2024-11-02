import React from 'react';
import './FleetManagement.css'; // This will be for styling if you choose to create a CSS file for this component.

const FleetManagement = () => {
    return (
        <div className="fleet-management">
            <h1>Fleet Management</h1>
            <div className="actions">
                <button>Add New Fleet</button>
                <button>Delete Fleet</button>
                <button>Modify Fleet</button>
            </div>
            <h2>Fleet Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fleet ID</th>
                        <th>Status</th>
                        <th>Creation Date</th>
                        <th>User Name</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Fleet data rows will go here */}
                </tbody>
            </table>
        </div>
    );
};

export default FleetManagement;
