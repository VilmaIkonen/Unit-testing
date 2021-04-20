'use strict';

module.exports = class ProductRegister {

  // 1. constructor
	constructor(jsonData) {
		if(jsonData) {
			this.storage = jsonData;
		}
		else { 
			throw new Error('data storage missing');
		}
	} 

  // 2. method getById(id)
  	getById(id) {
		for(let product of this.storage) {			
      if(product.id === id) {
        return {
          id: product.id,
          model: product.model,
          type: product.type,
          accessories: product.accessories,
          price: product.price,
          extras: product.extras
        };
      } else {
        return null
      }	
		}		
	}

  // 3. getAllIdsByModel(value)
  getAllIdsByModel(model) {
		if (model === null) return []

		const productsFound = [];
		for(let product of this.storage) {			
      if(product.model === model) {
        productsFound.push({
          id: product.id,
          model: product.model,
          type: product.type,
          accessories: product.accessories,
          price: product.price,
          extras: product.extras
        });
      }		
		}
		return productsFound
  }
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

	// getTypes() {
	// 	const types= [];
	// 	for(let person of this.storage) {
	// 		for(let phone of person.phones) {
	// 			if(!types.includes(phone.type)) {
	// 				types.push(phone.type);
	// 			}
	// 		}
	// 	}
	// 	return types;
	// } 

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
