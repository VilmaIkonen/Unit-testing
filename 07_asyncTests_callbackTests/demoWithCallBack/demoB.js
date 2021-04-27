'use strict'

const getCar = require('./carStorageFileCallback')

getCar(console.log) // see cbf(found). could be written as console.log(found), but would be hardcoded
console.log('one')
getCar(console.log, 'licence', 'ABC-1')
console.log('two')
getCar(data => console.log(data), 'model', 'Hoppa')
console.log('three')


// as getCar is slower, 'one', 'two', 'three' are printed first
// --> 
// one
// two
// three
// [
//   { model: 'Hoppa', licence: 'ABC-1' },
//   { model: 'Kaara', licence: 'XYZ-789' },
//   { model: 'Hoppa', licence: 'XYZ-123' },
//   { model: 'Kaara', licence: 'DFG-12' }
// ]
// [ { model: 'Hoppa', licence: 'ABC-1' } ]
// [
//   { model: 'Hoppa', licence: 'ABC-1' },
//   { model: 'Hoppa', licence: 'XYZ-123' }
// ]