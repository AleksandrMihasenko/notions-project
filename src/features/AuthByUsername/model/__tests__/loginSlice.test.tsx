import { DeepPartial } from 'app/types/global';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from '../slice/loginSlice';

describe('loginSlice', () => {
  test('must set username', async () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('user')))
      .toEqual({ username: 'user' });
  });

  test('must set password', async () => {
    const state: DeepPartial<LoginSchema> = { password: '1111' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1111')))
      .toEqual({ password: '1111' });
  });
});
