import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';
import { companyName } from '@zenra/configs';
const Sidebar: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    return (
        <div className='side-bar-layout'>
            <h2>{companyName}</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {isAuthenticated && (
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    )}
                    {!isAuthenticated && (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
