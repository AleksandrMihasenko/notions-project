import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', [ theme ])}>
      <Navbar />
      
      <ThemeSwitcher />
      
      <AppRouter />
    </div>
  );
};

export default App;
