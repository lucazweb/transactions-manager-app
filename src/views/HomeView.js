import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-preloading-component';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsList from '../components/TransactionsList';
import Sidebar from '../components/Sidebar';

const HomeView = ({loading}) => (
    <Fragment>
        <Sidebar />
        <main>
          {
            loading && (<Spinner />)
          }
            <TransactionsDisplay />
            <TransactionsList />
        </main>
    </Fragment>
);

const mapStateToProps = ({transactions}) => ({
  loading: transactions.loading
});

export default connect(mapStateToProps)(HomeView);
