import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/global';
import { getLoginError } from '../selectors/getLoginError/getLoginError';

describe('getLoginError', () => {
  test('must return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: '1111',
        isLoading: false,
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('must work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
