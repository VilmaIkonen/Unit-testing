// returns in carStorageFileNotWorking.js replaced with callback function --> demoB.js

'use strict'

const fs = require('fs')
const storageFile = '../cars.json'

// cbf = callback function
module.exports = (cbf, key, value) => {
  fs.readFile(storageFile, 'utf-8', (err, data) => {
    if(err) {
      cbf(err) 
    }
    else {
      let found = []
      const cars = JSON.parse(data)
      if(key && value) {
      const valueUpper = value.toUpperCase()

      for(let car of cars) {
        if(car[key].toUpperCase() === valueUpper) {
          found.push(car)
        }      
      }
    }
    else {
      found = cars    
    }
    cbf(found)    
    }
  })
}