import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', [ theme ])}>
      <Navbar />
      
      <button onClick={ toggleTheme }>Toggle theme</button>
      
      <AppRouter />
    </div>
  );
};

export default App;
