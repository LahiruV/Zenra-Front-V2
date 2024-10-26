import React from 'react';
import { Header, Sidebar } from '@zenra/components';
import './main-base-layout.css';

interface LayoutProps {
    children: React.ReactNode;
    showSidebar?: boolean;
}

const MainBaseLayout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
    return (
        <div className='main-base-layout'>
            {showSidebar && <Sidebar isAuthenticated={true} />}
            <div className='content-area'>
                <Header isAuthenticated={true} />
                <div className='main-base-layout-children'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainBaseLayout;
