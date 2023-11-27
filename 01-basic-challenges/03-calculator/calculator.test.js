const calculator = require('./calculator');

test('perfomingf arihmetic operations using the calculator function',()=>{
    const a = 10;
    const b = 2;

    expect(calculator(a,b,'+')).toBe(12);
    expect(calculator(a,b,'-')).toBe(8);
    expect(calculator(a,b,'/')).toBe(5);
    expect(calculator(a,b,'*')).toBe(20);
})