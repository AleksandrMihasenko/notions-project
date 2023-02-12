import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(classes.Sidebar, [className], {[classes.collapsed]: collapsed})}>
      <button onClick={onToggle}>Toggle</button>
      
      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
