import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>EV Care</h2>
                <p>Welcome Back</p>
                <Link to="/user-management">
                    <button>User Management</button>
                </Link> 
                <Link to="/fleet-management">
                <button>Fleet Management</button>
                </Link>
                <button>Fitstar</button>
                <button>LPM</button>
                <button>AMS</button>
                <button>ESC</button>
                <button>Other Components with extra features</button>
            </aside>
            <main className="main-content">
                <div className="content-section map-section">
                    <p>Live Map for all fleet<br />
                    OR<br />
                    A chart to show total number of users and fleet<br />
                    OR<br />
                    A chart with lowest to highest battery percentage</p>
                </div>
                <div className="content-section alerts-section">
                    <p>Alerts or Notifications</p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
