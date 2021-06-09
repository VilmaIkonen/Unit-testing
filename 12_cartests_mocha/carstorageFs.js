'use strict';

const fs = require('fs').promises;
const storageFile='./cars.json';

function getWithLicence(licence){
    return new Promise(async (resolve,reject)=>{
        try{

            const cars=JSON.parse(await fs.readFile(storageFile,'utf8'));

            if (!licence) {
                reject('licence number missing');
            }
            else {
                for (let car of cars) {
                    if (car.licence === licence) {
                        resolve(car);
                    }
                }
                resolve(null);
            }
        }
        catch(error){
            reject('read error');
        }  
    });
};

function search(key, value) {
    return new Promise(async (resolve,reject)=>{
        try{
            if (key && value) {
                if (!['model', 'licence', 'type'].includes(key)) {
                    reject('key not found');
                }
                else {
                    const cars = await JSON.parse(await fs.readFile(storageFile,'utf8'));
                    const found = [];
                    for (let car of cars) {
                        if (car[key] === value) {
                            found.push(car);
                        }
                    }
                    resolve(found);
                }
            }
            else {
                reject('parameter missing');
            }
        }
        catch(error){
            reject('read error');
        }  
    });
};

module.exports={ getWithLicence, search }