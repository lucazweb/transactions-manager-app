import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsList from '../components/TransactionsList';
import Sidebar from '../components/Sidebar';
import * as transactionActions from '../store/actions/transactions';

class HomeView extends React.Component{

  componentDidMount(){
    this.props.setCurrentView('Dashboard');
  }

  render(){
    return (
      <Fragment>
        <Sidebar />
        <main>
            <TransactionsDisplay />
            <TransactionsList />
        </main>
      </Fragment>      
    )
  }
}

const mapStateToProps = ({transactions}) => ({
  loading: transactions.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
