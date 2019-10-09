import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWallet, faPlusCircle, faArrowAltCircleLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import mockphoto from './lucazweb_placeholder.jpg';
import './style.scss';

const MobileNavigation = ({toggleMobileMenu, isMobileMenuOpen, currentView }) => (
  <div className="mobile-menu">
    <div className="mobile-menu-header">
        <div onClick={() => toggleMobileMenu()} className="mobile-menu-thrigger"><FontAwesomeIcon icon={faBars} /> </div>
        <h2 className="view-title">{currentView}</h2>
    </div>
    
    <nav className={isMobileMenuOpen ? 'active' : ''}>

        <div onClick={() => toggleMobileMenu()} className="close-back-menu"><FontAwesomeIcon icon={faTimesCircle} /></div>

        <div className="user-profile">
            <div className="user-photo" style={{backgroundImage: `url(${mockphoto})`}}></div>
            <div className="user-info">
                <h2>Lucas Santos</h2>
                <span>lucazwebmail@gmail.com</span>
            </div>
        </div>
        <ul>
            <li onClick={() => toggleMobileMenu()}> <Link to='/'> <FontAwesomeIcon icon={faWallet} /> <span>Dashboard</span> </Link></li>
            <li onClick={() => toggleMobileMenu()}> <Link to='/new-transaction'><FontAwesomeIcon icon={faPlusCircle} /><span>New Transaction</span> </Link></li>
        </ul>


    </nav>
  </div>
);

const mapStateToProps = function({transactions}){
  return {
    isMobileMenuOpen: transactions.isMobileMenuOpen,
    currentView: transactions.currentView
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);
