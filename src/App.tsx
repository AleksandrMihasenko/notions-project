import React, {Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', [ theme ])}>
      <Link to={'/'}>Main page</Link>
      <Link to={'/about'}>About page</Link>
      
      <button onClick={ toggleTheme }>Toggle theme</button>
      
      <Suspense>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
