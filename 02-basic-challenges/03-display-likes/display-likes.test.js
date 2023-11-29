const displayLikes = require('./display-likes');

test('count and display likes', ()=>{
    expect(displayLikes([])).toEqual('No one likes this');
    expect(displayLikes(['veriko'])).toEqual('veriko likes this');
    expect(displayLikes(['veriko', 'marika'])).toEqual('veriko, marika likes this');
    expect(displayLikes(['veriko', 'marika', 'nika'])).toEqual('veriko, marika, nika likes this');
    expect(displayLikes(['veriko', 'marika', 'nika', 'salome'])).toEqual('veriko, marika and 2 others likes this');

})