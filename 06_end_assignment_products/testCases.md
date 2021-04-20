# Test cases for end assignment task

## **1. Test cases for constructor**

### constructor API

The class is called ProductStorage.
Products in json object (dataStorageProducts.json) is passed as a parameter to the constructor. If the parameter is missing, the exception `'data storage missing'` is thrown.


#### test 1: Object created with json object as a parameter

```js
const storage = new ProductStorage(json object);
```
test if the field to store the json object has the same object as given as parameter.

```js
storage.jsonData === json object
```

#### test 2: Missing parameter throws an exception 

```js
const storage = new ProductStorage();
```
throws an exception `''data storage missing''`

## **2. Test cases for method getById(id)**

### getById(id) API

Method searches the datastorage for an object with given key. Key is unique.

#### Test 1: get product with id "3"

call: 
```js
storage.getById("3")
```
expect to return: 
```json
   {
    "id": 3,
    "model": "MaxEffect 2000",
    "type": "radio",
    "accessories": [],
    "price": 29,
    "extras": []
  }
```

#### Test 2: get product of wrong id "0"

call: 
```js
storage.getById("0")
```
expect to return `null`

#### Test 3: missing parameter

call: 
```js
storage.getById()
```
expect to return `null`

<!-- ## **3. Test cases for method getAllIdsByModel(value)**

### getAllIdsByModel(value) API

Returns all ids of the products matching the value of model.

#### Test 1: get ids of model "MaxEffect 2000"

call: 
```js
storage.getAllIdsByModel("MaxEffect 2000")
```
expect to return: 
```json
  [{
    "id": 3,
    "model": "MaxEffect 2000",
    "type": "radio",
    "accessories": [],
    "price": 29,
    "extras": []
  }]
   
```

#### Test 2: missing parameter

call: 
```js
storage.getAllIdsByModel()
```
expect to return `[]` -->

## **4. Test cases for method getAllProductTypes()**

### getAllProductTypes() API

Returns an array of different product types. 

#### Test 1: get all product types

call: 
```js
storage.getAllProductTypes()
```
expect to return: 
```json
  ["moccamaster", "vacuum cleaner", "radio"]   
```

#### Test 2: product has no type

call with test data that has empty type:
```json
  [{
    "id": 100,
    "model": "MinEffect 1",
    "type": "",
    "accessories": [],
    "price": 999,
    "extras": []
  }]
```
expect to return `[]`

## **5. Test cases for method getAllProductsByType(type)**

### getAllProductsByType(type) API

Returns an array of product objects of given type

#### Test 1: get products by type

call: 
```js
storage.getAllProductsByType("vacuum cleaner")
```
expect to return: 
```json
  [{
    "id": 2,
    "model": "Beast II",
    "type": "vacuum cleaner",
    "accessories": ["bags", "filter set", "delux brush set"],
    "price": 99,
    "extras": [
      {
        "name": "manual",
        "price": 15
      },
      {
        "name": "warranty",
        "price": 10
      }
    ]
  }]   
```

#### Test 2: product type is not in register

call: 
```js
storage.getAllProductsByType("Xbox")
```
expect to return `[]`

#### Test 3: missing parameter

call: 
```js
storage.getAllProductsByType()
```
expect to throw 'missing parameter'

## **6. Test cases for method hasAccessories(id)**

### hasAccessories(id) API

Returns boolean values based on whether accessories are available or not.

#### Test 1: 

call: 
```js
storage.hasAccessories("1")
```
expect to return: `true` 


#### Test 2: 

call: 
```js
storage.hasAccessories("3")
```
expect to return: `false` 

## **7. Test cases for method getProductAccessories(id)**

### getProductAccessories(id) API

Returns an array of product accessories. If none found, returns an empty array.

#### Test 1: get accessories with id

call: 
```js
storage.getProductAccessories("1")
```
expect to return: 
```json
["cleaning brush", "coffee cup"]   
```

#### Test 2: id not found

call: 
```js
storage.getProductAccessories("6")
```
expect to return `[]`

#### Test 3: missing parameter

call: 
```js
storage.getProductAccessories()
```
expect to return `[]`

## **8. Test cases for method getPriceWithoutExtras(id)**

### getPriceWithoutExtras(id) API

Returns the price with out extras.

#### Test 1: get price without accessories

call: 
```js
storage.getPriceWithoutExtras("2")
```
expect to return: 
```json
99   
```

#### Test 2: product id not found

call: 
```js
storage.getPriceWithoutExtras("6")
```
expect to throw 'nothing found with given id'

#### Test 3: missing parameter

call: 
```js
storage.getPriceWithoutExtras()
```
expect to throw 'missing parameter'

## **9. Test cases for method getPriceOfTheExtras(id)**

### getPriceOfTheExtras(id) API

Returns the total price of extras bundled with the product.

#### Test 1: get price with accessories

call: 
```js
storage.getPriceOfTheExtras("2")
```
expect to return: 
```json
25
```

#### Test 2: product id has no accessories

call: 
```js
storage.getPriceOfTheExtras("3")
```
expect to return: 
```json
0
```

#### Test 3: product id not found

call: 
```js
storage.getPriceWithoutExtras("6")
```
expect to throw 'nothing found with given id'