import React from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomeView from './views/HomeView';
import NewTransactionView from './views/NewTransactionView';

const customHistory = createBrowserHistory();

const Wrapper = () => (
    <div className="app">
        <Router history={customHistory}>
            <Route exact path='/' component={HomeView} />
            <Route exact path='/new-transaction' component={NewTransactionView} />
        </Router>
    </div>
    
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        state,
    }
}

export default connect(mapStateToProps)(Wrapper);