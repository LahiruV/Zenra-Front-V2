import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';

const Sidebar: React.FC = () => {
    return (
        <div className='side-bar-layout' >
            <h2>My App</h2>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
