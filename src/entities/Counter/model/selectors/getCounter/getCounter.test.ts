import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/global';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('must return counter part', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
