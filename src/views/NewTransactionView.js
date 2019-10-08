import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsForm from '../components/TransactionsForm';
import Sidebar from '../components/Sidebar';
import * as transactionActions from '../store/actions/transactions';

class NewTransactionView extends React.Component{

  componentDidMount(){
    this.props.setCurrentView('New Transaction')
  }

  render(){
    return (
      <Fragment>
        <Sidebar />
        <main>
            <TransactionsDisplay />
            <TransactionsForm />
        </main>        
      </Fragment>
    )
  }
}

const mapStateToProps = ({transactions}) => ({
  loading: transactions.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionView);
