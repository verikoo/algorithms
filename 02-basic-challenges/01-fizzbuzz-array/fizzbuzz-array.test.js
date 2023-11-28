const fizzBuzz = require('./fizz-buzz');
test('fizz buzz solution result for 3, 5 ', ()=>{
    expect(fizzBuzz(3)).toEqual([1,2,'Fizz'])
})