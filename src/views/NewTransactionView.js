import React, { Fragment } from 'react';
import TransactionsDisplay from '../components/TransactionsDisplay';
import TransactionsForm from '../components/TransactionsForm';
import Sidebar from '../components/Sidebar';

const NewTransactionView = () => (
    <Fragment>
        <Sidebar />
        <main>
            <TransactionsDisplay />
            <TransactionsForm />
        </main>        
    </Fragment>
);

export default NewTransactionView;