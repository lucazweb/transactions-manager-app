import React, { Fragment } from 'react';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsList from '../components/TransactionsList';
import Sidebar from '../components/Sidebar';

const HomeView = () => (
    <Fragment>
        <Sidebar />
        <main>
            <TransactionsDisplay />
            <TransactionsList />
        </main>
    </Fragment>
);

export default HomeView;