const countOccurences = require('./count-occurences');

test('Count Occurances of a charachter', ()=>{
    expect(countOccurences('hello','l')).toBe(2);
    expect(countOccurences('programming','m')).toBe(2);
    expect(countOccurences('banana','a')).toBe(3);
})