import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/global';
import { getLoginPassword } from '../selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword', () => {
  test('must return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: '1111',
        isLoading: true,
        error: 'error',
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('1111');
  });

  test('must return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
