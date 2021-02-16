import { expect } from '@jest/globals';
import {plus} from '../utils';

describe('utils', () => {
  test('plus()', () => {
    const result = plus(1);
    expect(result).toBe(2);
  });
});
