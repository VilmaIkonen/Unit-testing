// wont work, return "undefined" as callback is called after the file is read. Slow operation. Needs different callback thingy, see file carStorageFileCallback.js

'use strict'

const fs = require('fs')
const storageFile = '../cars.json'

module.exports = (key, value) => {
  fs.readFile(storageFile, 'utf-8', (err, data) => {
    if(err) {
      return err
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
    return found    
    }
  })
}
