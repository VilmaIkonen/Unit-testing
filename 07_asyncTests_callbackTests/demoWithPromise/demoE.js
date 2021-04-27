'use strict'

const getCar = require('./carStorageFileWithPromise')

(async ()=>{
  console.log(await getCar());
  console.log('one');
  console.log(await getCar('licence', 'ABC-1'));
  console.log('two');
  console.log(await getCar('model', 'Hoppa'));
  console.log('three');
})();
