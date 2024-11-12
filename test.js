const assert = require('assert');
const formatDate = require('./index');

try {
  assert.strictEqual(formatDate('2024-11-11'), 'November 11, 2024');
  console.log('Test passed!');
} catch (err) {
  console.error('Test failed:', err.message);
}
