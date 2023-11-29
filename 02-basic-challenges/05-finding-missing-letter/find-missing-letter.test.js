const findMissingLetter = require('./find-missing-letter')

test('find missing letter from alphabet', ()=>{
    expect(findMissingLetter(['a','c'])).toBe('b');
    expect(findMissingLetter(['a','d','c'])).toBe('b');
    expect(findMissingLetter(['a','j'])).toBe('b');
})