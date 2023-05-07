import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from '../selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('must return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: '1111',
        isLoading: true,
        error: 'error',
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('must return false', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
