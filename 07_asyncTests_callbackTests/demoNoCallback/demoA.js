'use strict'

// const getCar = require('./carStorageNoFile')
const getCar = require('./carStorageFileNotWorking') // wont work, return "undefined" as callback is called after the file is read. Slow operation

console.log(getCar())
console.log('one')
console.log(getCar('licence', 'ABC-1'))
console.log('two')
console.log(getCar('model', 'Hoppa'))
console.log('three')