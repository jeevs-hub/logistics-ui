import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

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