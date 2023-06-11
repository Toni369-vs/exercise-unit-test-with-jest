test ('adds 14 + 9 to equal 23', () => {
    const {sum} = require("./app.js");
    let total = sum(14,9);
    expect(total).toBe(23);
})


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 127.9 Japan yen", function(){
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(4.2)).toBe(537.1800000000001);
})

test("One yen should be 0.8 British pound", function(){
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(537.1800000000001)).toBe(429.7440000000001);
})