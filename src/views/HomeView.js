import React, { Fragment } from 'react';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsList from '../components/TransactionsList';
import TransactionsForm from '../components/TransactionsForm';

const HomeView = () => (
    <Fragment>
        <TransactionsDisplay />
        <TransactionsList />
        <TransactionsForm />
    </Fragment>
);

export default HomeView;