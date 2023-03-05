import { type FC, useState } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(classes.Sidebar, [className ?? ''], { [classes.collapsed]: collapsed })}>
      <Button
        type="button"
        data-testid="sidebar-toggle"
        className={classes.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classes.navigation}>
        <div className={classes.links}>
          <AppLink
            to={RoutePath.main}
            theme={AppLinkTheme.SECONDARY}
            className={classes.link}
          >
            <MainIcon className={classes.icon} />

            <span className={classes.text}>{t('link-main')}</span>
          </AppLink>
        </div>

        <div className={classes.links}>
          <AppLink
            to={RoutePath.about}
            theme={AppLinkTheme.SECONDARY}
            className={classes.link}
          >
            <AboutIcon className={classes.icon} />

            <span className={classes.text}>{t('link-about')}</span>
          </AppLink>
        </div>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
