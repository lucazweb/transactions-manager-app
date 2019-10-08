import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { GetTransactions } from './service/FireService';
import MobileNavigation from './components/MobileNavigation';
import HomeView from './views/HomeView';
import NewTransactionView from './views/NewTransactionView';
import * as transactionActions from './store/actions/transactions';

export const customHistory = createBrowserHistory();

class Wrapper extends React.Component{
    componentDidMount(){
        this.props.getTransactionsReq();

        GetTransactions()
            .then(snapshot => {
                
                let result = [];
                
                snapshot.forEach(doc => {
                  result.push({
                    id: doc.id,
                    data: doc.data(),
                  })
                });
                
                this.props.getTransactionsSuccess(result);
            })
    }

    render(){
        return (
          <div className="app">
              <Router history={customHistory}>
                <MobileNavigation />
                <Route exact path='/' component={HomeView} />
                <Route exact path='/new-transaction' component={NewTransactionView} />
              </Router>
          </div>            
        )
    }
}

const mapStateToProps = state => ({
    state,    
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
