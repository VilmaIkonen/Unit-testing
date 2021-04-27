'use strict'

const getCar = require('./carStorageFileCallback2')

try {
  getCar()
}
catch(err) {
  console.log(err.message)
}

getCar('licence', 'ABC-1', console.log)

getCar('model', 'Hoppa', data => {
  for(let car of data) {
    console.log(car.licence)
  }
})

getCar('model', 'Kaara', printData)

function printData(data) {
  console.log(data)
}

try {
  getCar('model', 'Hoppa')
}
catch(err) {
  console.log('error', err.message)
}

// --> 
// callback function missing
// error callback function missing
// [ { model: 'Hoppa', licence: 'ABC-1' } ]
// ABC-1
// XYZ-123
// [
//   { model: 'Kaara', licence: 'XYZ-789' },
//   { model: 'Kaara', licence: 'DFG-12' }
// ]