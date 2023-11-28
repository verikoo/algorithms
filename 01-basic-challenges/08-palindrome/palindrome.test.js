const isPalindrome = require('./palindrome');

test('Checking for the palndorme strings', ()=>{
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('racecar')).toBe(true);
})