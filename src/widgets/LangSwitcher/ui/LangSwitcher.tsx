import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";


interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  
  return (
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(classes.ThemeSwitcher, [className])}
        onClick={toggle}
      >
        {t('language')}
      </Button>
  )
};
