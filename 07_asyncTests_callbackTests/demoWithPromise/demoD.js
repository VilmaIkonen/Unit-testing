'use strict'

const getCar = require('./carStorageFileWithPromise')

console.log(getCar())
console.log('one')
console.log(getCar('licence', 'ABC-1'))
console.log('two')
console.log(getCar('model', 'Hoppa'))
console.log('three')