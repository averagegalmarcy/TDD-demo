const declared = require('./declared'); 

describe('function declared', () => {
  it('2 should equal', () => {
    expect(declared(2)).toEqual(2)
  });
});