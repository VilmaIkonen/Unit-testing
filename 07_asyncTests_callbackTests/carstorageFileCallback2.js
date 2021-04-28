// --> demoC

'use strict';

const fs = require('fs');
const storageFile='./cars.json';

//cbf is callback
module.exports = (key, value, cbf)=>{
    if(typeof cbf !== 'function'){
        throw new Error('callback function missing');
    }
    fs.readFile(storageFile, 'utf-8', (err,data)=>{
        if(err){
            cbf(err);
        }
        else{
            let found = [];
            const cars = JSON.parse(data);
            if (key && value) {
                const valueUpper = value.toUpperCase();
                for (let car of cars) {
                    if (car[key].toUpperCase() === valueUpper) {
                        found.push(car);
                    }
                }
            }
            else {
                found = cars;
            }
            cbf(found);
        }
    });  
}