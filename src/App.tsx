import React from 'react';
import { Counter } from './components/Counter';
import './index.scss'

const App = () => {
  return (
    <div className="app">
      <div>Notions app!</div>
      <Counter />
    </div>
  );
};

export default App;
