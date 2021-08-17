import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/layout/dashboard/dashboard';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
