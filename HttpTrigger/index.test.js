const httpFunctions = require('./index');

const context = require('../testing/Context');

test('Http trigger example', async() => {
    const request = {
        query : { name: 'JesusCastro' }
    };

    var interation = 100;
    console.time('FUNCTION #1');
    for (var i=0; i< interation; i++){
        httpFunction(context, request);
    }
    console.timeEnd('FUNCTION #1');
    expect(context.res.body).toContain('W');    
    expect(context.res.body).toEqual('Welcome, JesusCastro');

    //expect(context.log.mock.calls.length).toBe(1);
    // await httpFunctions(context, request); 
    // expect(context.log.mock.calls.length).toBe(2);
});