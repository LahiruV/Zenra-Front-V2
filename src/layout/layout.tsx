import React from 'react';
import Sidebar from '../components/main-components/sidebar-components/sidebar-component';


interface LayoutProps {
    children: React.ReactNode;
    showSidebar?: boolean;  // Optional prop to show/hide the sidebar
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {showSidebar && <Sidebar />}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;