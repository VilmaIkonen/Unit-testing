// 'use strict';

module.exports = class ProductRegister {

	constructor(jsonData) {
		if(jsonData) {
			this.storage = jsonData;
		}
		else { 
			throw new Error('dataStorageProducts.json is missing');
		}
	} //end of constructor

// 	getTypes() {
// 		const types= [];
// 		for(let person of this.storage) {
// 			for(let phone of person.phones) {
// 				if(!types.includes(phone.type)) {
// 					types.push(phone.type);
// 				}
// 			}
// 		}
// 		return types;
// 	} //end of getTypes

// 	getNumbersByType(firstname, lastname, type) {
// 		if(firstname && lastname && type) {
// 			const numbersFound= [];
// 			for(let person of this.storage) {
// 				if(person.firstname === firstname && person.lastname === lastname) {
// 					for(let phone of person.phones) {
// 						if(phone.type === type) {
// 							numbersFound.push(phone.number);
// 						}
// 					}
// 				}
// 			}  
// 			return numbersFound;
// 		}
// 		else {
// 			throw new Error('missing parameter');
// 		}
// 	} // end of getNumbersByType

// 	getAllNumbersByType(type) {
// 		if (!type) throw new Error('type missing');

// 		const numbersFound= [];
// 		for( let person of this.storage) {
// 			for(let phone of person.phones) {
// 				if(phone.type===type) {
// 					numbersFound.push({
// 						firstname:person.firstname,
// 						lastname:person.lastname,
// 						number:{
// 							type:phone.type,
// 							tel: phone.number
// 						}
// 					});
// 				}
// 			}
// 		}
// 		return numbersFound;
// 	} // end of getAllNumbersByType

// 	getAllNumbers() {
// 		const found= [];
// 		for(let person of this.storage) {
// 			if(person.phones && person.phones.length>0) {
// 				found.push(person);
// 			}
// 		}
// 		return found;
// 	} // end of getAllNumbers

// 	getName(number) {
// 		for(let person of this.storage) {
// 			for(let phone of person.phones) {
// 				if(phone.number===number) {
// 					return {
// 						firstname:person.firstname,
// 						lastname:person.lastname
// 					};
// 				}
// 			}
// 		}
// 		return null;
// 	}

} //end of class
