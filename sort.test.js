const sort = require('./sort');
const longList = [1,3,5,7,9,2,4,6,8,10,11,99,97,95,42,66,54,101];
const longListSorted = [1,2,3,4,5,6,7,8,9,10,11,42,54,66,95,97,99,101];

test('Handles empty list', () => {
  expect(sort([]).length).toBe(0);
});

test('Sorts short list', () => {
    expect(sort([5,3,1])).toBe([1,3,5]);
});

test('Sorts list where values are identical', () => {
    expect(sort([1,1,1])).toEqual([1,1,1]);
});

test('Sorts a long list', () => {
    expect(sort(longList)).toEqual(longListSorted);
});

test('Sorts list with negative numbers', () => {
    expect(sort([-4,17,-5,5])).toEqual([-5,-4,5,17]);
});
