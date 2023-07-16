import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/global';
import { getLoginUsername } from '../selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername', () => {
  test('must return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: '1111',
        isLoading: true,
        error: 'error',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('user');
  });

  test('must return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
