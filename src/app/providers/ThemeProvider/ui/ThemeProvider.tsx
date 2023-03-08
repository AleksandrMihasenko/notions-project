import React, { FC, useMemo, useState } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
