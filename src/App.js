import React from 'react';
import { Provider } from 'react-redux';
import Wrapper from './Wrapper';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;
