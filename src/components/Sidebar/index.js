import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPlusCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import mockphoto from './lucazweb_placeholder.jpg';
import './style.scss';

const Sidebar = () => (
    <aside>
        <div className="user-profile">
            <div className="user-photo" style={{backgroundImage: `url(${mockphoto})`}}></div>
            <div className="user-info">
                <h2>Lucas Santos</h2>
                <span>lucazwebmail@gmail.com</span>
            </div>
        </div>

        <nav className="sidebar-menu">
            <ul>
                <li><Link data-test="dashboard" to='/'> <FontAwesomeIcon icon={faWallet} /> <span>Dashboard </span></Link></li>
                <li><Link data-test="newtransaction" to='/new-transaction'><FontAwesomeIcon icon={faPlusCircle} /><span>Nova transação </span></Link></li>
                <li><Link><FontAwesomeIcon icon={faSignOutAlt} /><span>Sair</span></Link></li>
            </ul>
        </nav>
    </aside>    
);

export default Sidebar;
