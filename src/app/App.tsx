import React from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', [ theme ])}>
      <Link to={'/'}>Main page</Link>
      <Link to={'/about'}>About page</Link>
      
      <button onClick={ toggleTheme }>Toggle theme</button>
      
      <AppRouter />
    </div>
  );
};

export default App;
