'use strict';

const ProductRegister = require('../productRegister');
const products = require('../dataStorageProducts.json');

// 1. Test cases for constructor
describe('Testing constructor', () => {

    test('Object created with json object as a parameter',() => {
        const productRegister = new ProductStorage(products);
        expect(productRegister.storage).toEqual(products);
    });

    test('Missing parameter throws an exception', () => {
        expect(() => new ProductStorage()).toThrow('data storage missing');
    });
});

// 2. Test cases for method getById(id)
describe('Testing method getById(id)', () => {
  const productRegister = new ProductRegister(products);

  test('get product with id "3"', ()=>{
      expect(productRegister.getById("3"))
          .toEqual(
          {
            "id": 3,
            "model": "MaxEffect 2000",
            "type": "radio",
            "accessories": [],
            "price": 29,
            "extras": []
          }
        );
  });

  test('get product of wrong id "0"', ()=>{
      expect(productRegister.getById("0")).toBeNull();
  });

  test('missing parameter', () => {
      expect(productRegister.getById()).toBeNull();
  });
});

// 3. Test cases for method getAllIdsByModel(value)
describe('Testing method getAllIdsByModel(value)', () => { });

// 4. Test cases for method getAllProductTypes()
describe('Testing method getAllProductTypes()', () => {
    const productRegister = new ProductRegister(products);

    test('get all product types', () => {
        expect(productRegister.getAllProductTypes()).toEqual(["home", "work","mobile"])
    });

    test('product has no type)',() => {
        const testData =
        [{
          "id": 100,
          "model": "MinEffect 1",
          "type": "",
          "accessories": [],
          "price": 999,
          "extras": []
        }]

        productRegister = new ProductRegister(testData);
        expect(productRegister.getAllProductTypes()).toEqual([]);
    });
});

// 5. Test cases for method getAllProductsByType(type)
describe('Testing method getAllProductsByType(type)', () => {
  const productRegister = new ProductRegister(products);

  test('get products by type', () => {
    expect(productRegister.getAllProductsByType("vacuum cleaner")).toEqual(
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
    )
  });

  test('product type is not in register', () => {
    expect(productRegister.getAllProductsByType("Xbox").toEqual([]))
  });

  test('missing parameter', () => {
    expect(productRegister.getAllProductsByType().toBeNull());
  });
});

// 6. Test cases for method hasAccessories(id)
describe('Testing some method', () => {
    test('test smth', () => { });
    test('test smth', () => { });
});

// 7. Test cases for method getProductAccessories(id)
describe('Testing some method', () => {
  test('test smth', () => { });
  test('test smth', () => { });
});

// 8. Test cases for method getPriceWithoutExtras(id)
describe('Testing some method', () => {
  test('test smth', () => { });
  test('test smth', () => { });
})

// 9. Test cases for method getPriceOfTheExtras(id)
describe('Testing some method', () => {
  test('test smth', () => { });
  test('test smth', () => { });
})
