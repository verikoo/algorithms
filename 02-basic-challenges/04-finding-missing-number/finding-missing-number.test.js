const findingMissingNumber = require('./finding-missing-number')

test('find one missing number form the array' , ()=>{
    expect(findingMissingNumber([1,2,3,5])).toBe(4);
    expect(findingMissingNumber([1,2,3,4,5,6,8])).toBe(7);
});