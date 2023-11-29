const arrayIntersection = require('./array-intersection');

test('finding array intersection', ()=>{
    expect(arrayIntersection([1,2,3],[2,3,4])).toEqual([2,3]);
    
})