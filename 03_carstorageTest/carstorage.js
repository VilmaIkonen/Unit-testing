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
}

function search(key,value){
    if(key!=undefined && value!=undefined){
        // if(key && value){ //results parameter missing exception for empty string
        if(key==='model' || key==='licence' || key==='type'){
            const found=[];
            for(let car of cars) {
                if(car[key]===value) {
                    found.push(car);
                }
            }
            return found;
        }
        else{
            throw new Error('key not found');
        }
    }
    else {
        throw new Error('parameter missing');
    }
}

module.exports={
    getWithLicence, 
    search
}