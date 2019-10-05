import React from 'react';
import { connect } from 'react-redux';

const Wrapper = () => (
    <pre> Transactions Manager App</pre>
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        state,
    }
}

export default connect(mapStateToProps)(Wrapper);