const counterVolwes = require('./count-vowels');

test('count the volwes in the text', ()=>{
    expect(counterVolwes('Hello world')).toBe(3);
})