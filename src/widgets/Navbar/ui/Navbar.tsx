import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(classes.Navbar, [className])}>
      <div className={classes.Links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main page</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About page</AppLink>
      </div>
    </div>
  );
};
