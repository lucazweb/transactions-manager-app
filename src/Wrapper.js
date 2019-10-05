import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import HomeView from './views/HomeView';

const Wrapper = () => (
    <div className="app">
        <Sidebar />
        <main>
            <HomeView />
        </main>
    </div>
    
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        state,
    }
}

export default connect(mapStateToProps)(Wrapper);