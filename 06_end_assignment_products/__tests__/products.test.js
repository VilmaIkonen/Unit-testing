'use strict';

const ProductRegister = require('../productRegister');
const products = require('../dataStorageProducts.json');

// 1. Test cases for constructor
describe('Testing constructor', () => {

    test('Object created with json object as a parameter',() => {
        const productRegister = new ProductRegister(products);
        expect(productRegister.storage).toEqual(products);
    });

    test('Missing parameter throws an exception', () => {
        expect(() => new ProductRegister()).toThrow('data storage missing');
    });
});

// 2. Test cases for method getById(id)
describe('Testing method getById(id)', () => {
  const productRegister = new ProductRegister(products);

  test('get product with id "1"', ()=>{
      expect(productRegister.getById(1))
          .toEqual(
            {
              "id": 1,
              "model": "Future 2025",
              "type": "moccamaster",
              "accessories": ["cleaning brush", "coffee cup"],
              "price": 99,
              "extras": [
                {
                  "name": "coffee",
                  "price": 15
                },
                {
                  "name": "spoon",
                  "price": 10
                },
                {
                  "name": "color gold",
                  "price": 100
                }
              ]
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
describe('Testing method getAllIdsByModel(value)', () => {
  const productRegister = new ProductRegister(products);

  test('get ids of model "MaxEffect 2000"', () => {
      const expectedValue =
        [{
          "id": 3,
          "model": "MaxEffect 2000",
          "type": "radio",
          "accessories": [],
          "price": 29,
          "extras": []
        }]

      expect(productRegister.getAllIdsByModel('MaxEffect 2000')).toEqual(expectedValue);
  });

  test('missing parameter', () => {
      expect(productRegister.getAllIdsByModel()).toEqual([]);
  });
});

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
describe('Testing method hasAccessories(id)', () => {
  const productRegister = new ProductRegister(products);

    test('product has accessories', () => {
      expect(productRegister.hasAccessories("1")).toEqual(true)
    });

     test('product does not have accessories', () => {
      expect(productRegister.hasAccessories("3")).toEqual(false)
    });
});

// 7. Test cases for method getProductAccessories(id)
describe('Testing method getProductAccessories(id)', () => {

  test('get accessories with id', () => {
    expect(productRegister.getProductAccessories("1")).toEqual(["cleaning brush", "coffee cup"])
  });
  
  test('id not found', () => {
    expect(productRegister.getProductAccessories("6")).toEqual([])
  });

  test('missing parameter', () => {
    expect(productRegister.getProductAccessories()).toEqual([]);
});
});

// 8. Test cases for method getPriceWithoutExtras(id)
describe('Testing method getPriceWithoutExtra(id)', () => {
  
  test('get price without accessories', () => {
    expect(productRegister.getPriceWithoutExtra("2").toEqual(99))
  });

  test('product id not found', () => {
    expect(productRegister.getPriceWithoutExtra("6")).toThrow('nothing found with given id')
  });

  test('missing parameter', () => {
    expect(productRegister.getPriceWithoutExtra()).toThrow('missing parameter')
  });
})

// 9. Test cases for method getPriceOfTheExtras(id)
describe('Testing method getPriceOfTheExtras(id)', () => {

  test('get price with accessories', () => {
    expect(productRegister.getPriceOfTheExtras("2").toEqual(25))
  });
  
  test('id has no accessories', () => {
    expect(productRegister.getPriceOfTheExtras("3").toEqual(0))
  });

  test('product id not found', () => {
    expect(productRegister.getPriceOfTheExtras("6")).toThrow('nothing found with given id')
  });
})
