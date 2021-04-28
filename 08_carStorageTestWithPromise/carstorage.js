'use strict';

const cars = require('./cars.json');

function getWithLicence(licence){
	return new Promise((resolve, reject) => {
		if (!licence) reject('licence number missing');

		for(let car of cars){
			if(car.licence === licence){
				resolve(car);
			}
		}
		resolve(null);
	})	
}

function search(key,value){
	return new Promise((resolve, reject) => {
		if(key && value){
				const found=[];
				for(let car of cars) {
					if(car[key]===value) {
						found.push(car);
					}
				}
				resolve(found)
			}
			else {
			reject('parameter missing');			
    }
	})  
}

module.exports = { getWithLicence, search }