import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      onClick={ toggleTheme }
      className={classNames(classes.ThemeSwitcher, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
    </Button>
  );
};