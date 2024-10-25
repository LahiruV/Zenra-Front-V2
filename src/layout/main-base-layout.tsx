import React from 'react';
import { Sidebar } from '@zenra/components';

interface LayoutProps {
    children: React.ReactNode;
    showSidebar?: boolean;
}

const MainBaseLayout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {showSidebar && <Sidebar />}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                {children}
            </div>
        </div>
    );
};

export default MainBaseLayout;