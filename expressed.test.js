const { equal } = require('./expressed');

describe('function equal', () =>  {
  it('2 should equal', () => {
    expect(equal(2)).toEqual(2);
  });
});

//you have to import the object since it is no longer a function in the test 

// to check if all the same value for the different functions

// const n = 2;

// const arrow = arrow(n);
// const declared = declared(n);
// const expressed = expressed(n);

// expect(arrow).toEqual(declared);
// expect(declared).toEqual(expressed);
//only need to do the first 2 because of the transmute property 
