import React from 'react';
import MainPage from './screens/MainPage';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </>
  );
}

export default App;
