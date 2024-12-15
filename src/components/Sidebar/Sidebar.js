import React from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = ({ menu }) => {
    return (
        <div className='sidebar'>
            <ul className="nav nav-pills flex-column">
                {menu.map((menuItem, idx) => <li key={idx} className='nav-item'><NavLink className='nav-link' to={menuItem.url}>{menuItem.title}</NavLink></li>)}                
            </ul>
        </div>
    );
};

export default Sidebar;