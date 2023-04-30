import {
  type FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManger } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    // @ts-ignore
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(classes.LoginForm, [className as string])}>
        <Text title={t('authorisation-form') as string} />
        {error && <Text text={t('invalid-login') as string} theme={TextTheme.ERROR} />}

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
          disabled={isLoading}
          onClick={onLoginClick}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
