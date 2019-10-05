import React from 'react';
import './style.scss';

const TransactionsForm = () => (
    <div className="transactions-form">
        <h2>Register transaction</h2>
        <form action="">
            <div className="group">      
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
            </div>                                                        
            <div className="group-row">
                <div className="group">      
                    <input type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Value</label>
                </div>                                  

                <div className="group">      
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Category</label>
                </div>                            
            </div>
            <div className="group group-btns">
                <button className="btn btn-save-transactions">Save Transaction</button>
                <button className="btn btn-cancel-transactions">Cancel Transaction</button>
            </div>
        </form>
    </div>    
);

export default TransactionsForm;