const sort = require('./sort');

test('Handles empty list', () => {
  expect(sort([]).length).toBe(0);
});