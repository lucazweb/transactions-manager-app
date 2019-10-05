import React from 'react';
import { connect } from 'react-redux';
import HomeView from './views/HomeView';

const Wrapper = () => (
    <HomeView />
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        state,
    }
}

export default connect(mapStateToProps)(Wrapper);