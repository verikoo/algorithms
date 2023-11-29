const allCharsUnique = require('./are-all-chars-unique');

test('test if all chars are unique', ()=>{
    expect(allCharsUnique('abcde')).toBe(true);
    expect(allCharsUnique('aaaaabsd')).toBe(false);
    expect(allCharsUnique('abcdeabscde')).toBe(false);
})