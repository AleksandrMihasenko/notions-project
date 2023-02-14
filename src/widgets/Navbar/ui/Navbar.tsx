import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.Navbar, [className])}>
      <div className={classes.Links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t('link-main')}</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('link-about')}</AppLink>
      </div>
    </div>
  );
};
