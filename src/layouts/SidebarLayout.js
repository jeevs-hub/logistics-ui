import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const SidebarLayout = ({ menu, children }) => {
    return (
        <div className="layout">
            <Sidebar menu={menu} />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;