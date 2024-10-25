import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import Avatar from '@mui/material/Avatar';
import './header-component.css';

const Header: React.FC = () => {
    return <div>
        <header className='main-header'>
            <div className='header-left'>
                {/* <SearchIcon className="header-icon" /> */}
            </div>
            <div className='header-right'>
                <NotificationsIcon className="header-icon" />
                <PeopleIcon className="header-icon" />
                <div className="header-language">
                    <span>🇬🇧</span>
                    {/* Add your language switcher here */}
                </div>
                <Avatar src="https://i.pravatar.cc/300" alt="User Avatar" className="header-avatar" />
            </div>
        </header>
    </div>;
};

export default Header;
