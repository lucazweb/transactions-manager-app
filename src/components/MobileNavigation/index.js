import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const MobileNavigation = ({toggleMobileMenu, isMobileMenuOpen, currentView }) => (
  <div className="mobile-menu">
    <div className="mobile-menu-header">
        <div onClick={() => toggleMobileMenu()} className="mobile-menu-thrigger"><FontAwesomeIcon icon={faBars} /> </div>
        <h2 className="view-title">{currentView}</h2>
    </div>
    
    <nav className={isMobileMenuOpen ? 'active' : ''}>
        <ul>
            <li onClick={() => toggleMobileMenu()}> <Link to='/'> Dashboard </Link></li>
            <li onClick={() => toggleMobileMenu()}> <Link to='/new-transaction'> New Transaction </Link></li>
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
