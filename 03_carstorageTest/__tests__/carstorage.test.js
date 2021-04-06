'use strict';


const functions=require('../carstorage');

describe('Testing function getWithLicence', ()=>{
    const result = { "model": "Bored T-Model", "licence": "XYZ-987", "type": "XL" };

    test('getWithLicence("XYZ-987")', ()=>{
        expect(functions.getWithLicence("XYZ-987")).toEqual(result);
    });

    test('getWithLicence("X-1")', ()=>{
        expect(functions.getWithLicence("X-1")).toBeNull();
    });

    test('getWithLicence()', ()=>{
        expect(() => functions.getWithLicence()).toThrow('licence number missing');
    });
});

describe('Testing function search',()=>{
    describe('Testing the key "model"', ()=>{
        const result=[
            { "model": "Nova", "licence": "ABC-1", "type": "GT" },
            { "model": "Nova", "licence": "DFG=123", "type": "GTX" }
        ]

        test("Search with model 'Nova'", ()=>{
            expect(functions.search('model','Nova')).toEqual(result);
        });

        test("Search with model 'X'", ()=>{
            expect(functions.search('model','X')).toEqual([]);
        });
    });

    describe('Testing the key "licence"', ()=>{
        const result = [
            { "model": "Nova", "licence": "ABC-1", "type": "GT" }
        ];

        test("Search with licence 'ABC-1'", ()=>{
            expect(functions.search('licence','ABC-1')).toEqual(result);
        });

        test("search with licence 'X-1'", ()=>{
            expect(functions.search('licence','X-1')).toEqual([]);
        });
    });

    describe('Testing the key "type"', ()=>{
        const resultGT = [
            { "model": "Nova", "licence": "ABC-1", "type": "GT" }
        ];

        const resultXL = [
            { "model": "Bored T-Model", "licence": "XYZ-987", "type": "XL" },
            { "model": "Bored T-Model", "licence": "ABE-13", "type": "XL" }
        ];

        test("search with type, 'GT'", ()=>{
            expect(functions.search('type', 'GT')).toEqual(resultGT);
        });

        test("search with type 'XL'", ()=>{
            expect(functions.search('type','XL')).toEqual(resultXL);
        });

        test("search with type 'X", ()=>{
            expect(functions.search('type','X')).toEqual([]);
        });
    });

    describe('Tests to throw exceptions', ()=>{
        test('Key not valid', ()=>{
            expect( ()=> functions.search('x', 'y')).toThrow('key not found');
        });

        test('One parameter missing', ()=>{
            expect(() => functions.search('model')).toThrow('parameter missing');
        });

        test('Both parameters are missing', () => {
            expect(() => functions.search()).toThrow('parameter missing');
        });
    });

    describe('Addittional tests 11 and 12', ()=>{
        test('key is an empty string', ()=>{
            expect(() => functions.search('', 'Nova')).toThrow('key not found');
        });

        test('key is string of spaces', ()=>{
            expect(() => functions.search(' ', 'Nova')).toThrow('key not found');
        });
    });
});
