import React from 'react';
import './style.scss';

const TransactionsList = () => (
    <div class="transactions-list">
        <h2>Transactions list</h2>
        <div class="box">
            <ul id="first-list">
                <li>
                    <span></span>
                    <div class="title">Uber</div>
                    <div class="price">R$ 23.99</div>
                    <div class="time">
                        <span>04, Out</span>
                    </div>
                </li>
                <li>
                    <span></span>
                    <div class="title">iFood</div>
                    <div class="price">R$ 34.78</div>
                    <div class="time">
                        <span>29, Set</span>
                    </div>
                </li>
                                            
                <li>
                    <span></span>
                    <div class="title">Uber</div>
                    <div class="price">R$ 23.99</div>
                    <div class="time">
                        <span>29, Set</span>
                    </div>
                </li>
                <li>
                    <span></span>
                    <div class="title">iFood</div>
                    <div class="price">R$ 34.78</div>
                    <div class="time">
                        <span>29, Set</span>
                    </div>
                </li>
                <li>
                    <span></span>
                    <div class="title">Padaria Novo Pão</div>
                    <div class="price">R$ 12.39</div>
                    <div class="time">
                        <span>29, Set</span>
                    </div>
                </li>  
            </ul>
        </div> 
    </div> 
);

export default TransactionsList;