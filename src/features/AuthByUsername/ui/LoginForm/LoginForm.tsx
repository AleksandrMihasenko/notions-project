import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();

  const {
    className,
  } = props;

  return (
    <div className={classNames(classes.LoginForm, [className as string])}>
      <Input autofocus placeholder={t('type-username') ?? ''} type="text" className={classes.input} />
      <Input placeholder={t('type-password') ?? ''} type="text" className={classes.input} />

      <Button
        type="button"
        className={classes.loginBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
      >
        {t('login')}
      </Button>
    </div>
  );
};
