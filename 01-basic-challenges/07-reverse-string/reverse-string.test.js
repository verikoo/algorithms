const reverseString = require('./reverse-string');

test('Reversing a string', ()=>{
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
})