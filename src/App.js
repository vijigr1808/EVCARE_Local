import React from "react";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";
import FleetManagement from './Components/FleetManagement';
import AddUserPanel from './Components/AddUserPanel';
import Dashboard from './Components/Dashboard';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
            <Router>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/user-management" element={<UserManagement />} />
                        <Route path="/fleet-management" element={<FleetManagement />} />
                        <Route path="/adduser-panel" element={<AddUserPanel />} />
                    </Routes>
                </div>
            </Router>
        </div>
  );
}

export default App;
