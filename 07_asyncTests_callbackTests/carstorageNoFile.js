// --> demoA

'use strict';

const cars = require('./cars.json');

module.exports = (key,value)=>{
    let found=[];
    if(key && value) {
        const valueUpper=value.toUpperCase();
        for(let car of cars){
            if(car[key].toUpperCase()===valueUpper) {
                found.push(car);
            }
        }
    }
    else{
        found=cars;
    }
    return found;
}