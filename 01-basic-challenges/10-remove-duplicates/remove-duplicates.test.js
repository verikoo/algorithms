const removeDuplicates = require('./remove-duplicates');

test('Remve duplicates from arr', ()=>{
    expect(removeDuplicates([1,1,'f','f'])).toEqual([1,'f']);
})