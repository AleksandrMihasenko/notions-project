import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm, [className as string])}>
      <Input
        type="text"
        autofocus
        placeholder={t('type-username') ?? ''}
        className={classes.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        placeholder={t('type-password') ?? ''}
        className={classes.input}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        type="button"
        className={classes.loginBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        onClick={onLoginClick}
      >
        {t('login')}
      </Button>
    </div>
  );
});
