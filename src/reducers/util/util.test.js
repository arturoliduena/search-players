import { getAge } from './index';

it('calculate age', () => {
  expect(getAge('2009-1-1')).toEqual(10);
  expect(getAge('1990-10-17')).toEqual(28);
});