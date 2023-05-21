import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((
  { className, short }: LangSwitcherProps,
) => {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', [className as string])}
      onClick={toggle}
    >
      {t(short ? 'short-language' : 'language')}
    </Button>
  );
});
