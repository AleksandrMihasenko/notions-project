import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsername', () => {
  test('must return success login', async () => {
    const userValue = { id: '1', username: 'user' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'user', password: '1111' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('must return error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'user', password: '1111' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
