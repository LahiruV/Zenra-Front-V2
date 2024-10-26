import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import Avatar from '@mui/material/Avatar';
import './header-component.css';
import { CustomizedSwitches } from '@zenra/widgets';
export interface HeaderProps {
    isAuthenticated: boolean
}
const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
    return <div>
        <header className='main-header'>
            <div className='header-left'>
                <CustomizedSwitches isMaterialUISwitch={true} />
            </div>
            {isAuthenticated && (
                <div className='header-right'>
                    <NotificationsIcon className="header-icon" />
                    <PeopleIcon className="header-icon" />
                    <div className="header-language">
                        <span>🇬🇧</span>
                    </div>
                    <Avatar src="https://i.pravatar.cc/300" alt="User Avatar" className="header-avatar" />
                </div>
            )}
        </header>
    </div>;
};

export default Header;
