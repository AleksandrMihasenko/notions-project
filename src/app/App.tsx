import React, {Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
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
      
      <Suspense>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
