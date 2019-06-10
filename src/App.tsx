import React from 'react';
import { Provider } from 'react-redux';
import store from './rootReducer';
import Main from './components/Main';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
