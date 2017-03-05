require('should');
const getAllPalindromeStr = require('../src/get-palindrome-str');

describe('get all palindrome string', () => {
  it('should return all palindrome string', () => {
    const result = getAllPalindromeStr('abcdef');
    result.should.eql(['fedcba', 'edcba', 'dcba', 'cba', 'ba', 'a']);
  });
});