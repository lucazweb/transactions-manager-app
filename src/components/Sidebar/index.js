import React from 'react';
import './style.scss';

const Sidebar = () => (
    <aside>
        <div className="user-profile">
            <div className="user-photo"></div>
            <div className="user-info">
                <h2>User name</h2>
                <span>user@transactions.com</span>
            </div>
        </div>

        <nav className="sidebar-menu">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Add Transaction</a></li>
                <li><a href="#">Transaction list</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </aside>    
);

export default Sidebar;