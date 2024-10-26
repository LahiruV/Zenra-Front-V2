import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';
import { companyName } from '@zenra/configs';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

export interface SidebarProps {
    isAuthenticated: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isAuthenticated }) => {
    const [selected, setSelected] = useState<string>('');

    const logOut = () => {
        console.log('Logging out');
    }

    const handleSelect = (item: string) => {
        setSelected(item);
    }

    return (
        <div className='side-bar-layout'>
            <h2>{companyName}</h2>
            <nav>
                <ul>
                    <li
                        className={selected === 'home' ? 'selected' : ''}
                        onClick={() => handleSelect('home')}
                    >
                        <Link to="/">
                            <HomeIcon style={{ marginRight: '10px' }} />
                            Home
                        </Link>
                    </li>
                    <li
                        className={selected === 'about' ? 'selected' : ''}
                        onClick={() => handleSelect('about')}
                    >
                        <Link to="/about">
                            <InfoIcon style={{ marginRight: '10px' }} />
                            About
                        </Link>
                    </li>
                    {isAuthenticated && (
                        <li
                            className={selected === 'dashboard' ? 'selected' : ''}
                            onClick={() => handleSelect('dashboard')}
                        >
                            <Link to="/dashboard">
                                <DashboardIcon style={{ marginRight: '10px' }} />
                                Dashboard
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <nav className='log-out-button'>
                {isAuthenticated ? (
                    <li onClick={() => { logOut(); handleSelect('logout'); }} className={selected === 'logout' ? 'selected' : ''}>
                        <Link to="">
                            <LogoutIcon style={{ marginRight: '10px' }} />
                            Logout
                        </Link>
                    </li>
                ) : (
                    <li
                        className={selected === 'login' ? 'selected' : ''}
                        onClick={() => handleSelect('login')}
                    >
                        <Link to="/login">
                            <LoginIcon style={{ marginRight: '10px' }} />
                            Login
                        </Link>
                    </li>
                )}
            </nav>
        </div>
    );
};

export default Sidebar;
