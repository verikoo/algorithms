const helloWorld = require('./hello-world');

test("Returning 'hello, world!' ad a string", ()=>{
    const result =  helloWorld();
    expect(result).toBe('Hello world!');
});