const double = require('./double'); 

describe('double function', () => {
  it('50 double 2 should equal', () => {
    expect(double(50 * 2)).toEqual(200); 
  });

  it('50 double should equal', () => {
  expect(double(50)).toEqual(100);
  })
});