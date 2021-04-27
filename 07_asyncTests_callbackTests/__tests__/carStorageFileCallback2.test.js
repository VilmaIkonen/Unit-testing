'use strict'

const getCar = require('../demoWithCallBack/carStorageFileCallback2')

describe('testing callback', () =>{
  test('get with licence ABC-1', done=>{
      function cb(data){
          try {
              expect(data).toEqual([{ "model": "Hoppa", "licence": "ABC-1" }]);
              done();
          }
          catch (error){
              done(error);
          }
      }
      getCar('licence','ABC-1',cb);
  });
});

describe('testing callback with array of test values', () => {
  const testValues = [
    ['licence', 'XYZ', []],
    ['model', 'Hoppa', [{ "model": "Hoppa", "licence": "ABC-1" }, { "model": "Hoppa", "licence": "XYZ-123" }]],
    ['licence', 'DFG-12', { "model": "Kaara", "licence": "DFG-12" }]
  ]
  test.each(testValues)('%s, %s', (key, value, expectedResult, done) => {
    function cb(data) {
      try {
        expect(data).toEqual(expectedResult)
        done()
      }
      catch(error) {
        done(error)
      }
    }
    getCar(key, value, cb)
  })
})

describe('testing the missing callback', () => {
  test('callback missing throws exception', () => {
    expect(() => getCar('licence', 'ABC-1')).toThrow('callback function missing')
  })
})