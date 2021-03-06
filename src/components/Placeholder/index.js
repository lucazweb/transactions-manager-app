import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './9626-levitate-meditate-peace-and-love.json';
import { Link } from 'react-router-dom';
import './style.scss';

const Placeholder = () => (
  <div className="transactions-placeholder">
    <div className="welcome"> 
      <h2> Nenhuma transação cadastrada. </h2>
      <p>Que tal acompanhar os seus gastos?</p>
      <Link data-test="startbtn" to='/new-transaction' className="btn btn-start">Começar</Link>    
    </div>
    <div className="desktop-only"> 
      <Lottie options={{animationData: animation}} width="45%" />
    </div>
    <div className="mobile-only"> 
      <Lottie options={{animationData: animation}} width="75%" />
    </div>
  </div>
);

export default Placeholder;
