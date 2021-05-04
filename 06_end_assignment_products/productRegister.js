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
      } 
      else {
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

  // 4. getAllProductTypes()
  getAllProductTypes() {
		const types= [];
		for(let product of this.storage) {		
      if(!types.includes(product.type)) {
        types.push(product.type);
      }	
      if(!product.type) {return []}	
		}
		return types;
	}

  // 5. getAllProductsByType(type)
  getAllProductsByType(type) {
    if(!type) return null
    
		const productsFound = [];
		for(let product of this.storage) {			
      if(product.type === type) {
        productsFound.push({
          id: product.id,
          model: product.model,
          type: product.type,
          accessories: product.accessories,
          price: product.price,
          extras: product.extras
        });
      }	
      if(product.type === undefined) {
        return []
      }
		}
		return productsFound
  }
  
  // 6. hasAccessories(id)
  hasAccessories(id) {
		for(let product of this.storage) {			
      if(product.id === id && product.accessories !== '') {
        return true
      } 
      else {
        return false
      }	
		}		
	}

  // 7. getProductAccessories(id)
  getProductAccessories(id) {
		for(let product of this.storage) {			
      if(product.id === id && product.accessories.length >0) {
        return product.accessories;
      } 
    }
    return []	
  }

  // 8. getPriceWithoutExtras(id)
  getPriceWithoutExtras(id) {    
    if(!id) throw new Error('missing parameter') 
    
		for(let product of this.storage) {			
      if(product.id === id) {
        return {price: product.price}
      }      	   
		}
    throw new Error('nothing found with given id') 
	}

  // 9.  getPriceOfTheExtras(id) // FIX ME
  getPriceOfTheExtras(id) {
    if(!id) throw new Error('missing parameter') 
    
    for(let product of this.storage) {
      if(product.id === id) {
        let sum = 0;
        for(let item of product.extras) {         
          sum += item.price;          
        }
        return sum
      }
    }
    throw new Error('nothing found with given id') 
  } 
}

