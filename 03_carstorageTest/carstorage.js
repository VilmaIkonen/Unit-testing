'use strict';

const cars = require('./cars.json');

function getWithLicence(licence){
    if (!licence) throw new Error('licence number missing');

    for(let car of cars){
        if(car.licence===licence){
            return car;
        }
    }
    return null;
};

function search(key, value) {
    if(key && value) {
        if(key === 'model' || key === 'licence' === key === 'type') {
            const foundCars = [];
            for (let car of cars) {
                if (car[key] === value) {
                    foundCars.push(car);
                }
            }
            return foundCars;  
        } else {
            throw new Error('key not found')
        }
    } else {
        throw new Error('parameter missing');
    }

    // if (!key || !value) throw new Error('parameter missing');
  
    // const foundCars = [];
    // for (let car of cars) {
    //     if (car.model === model || car.licence === licence || car.type === type) {
    //         foundCars.push(car);
    //     }
    // }
    // return foundCars;    
}

module.exports = { getWithLicence, search }