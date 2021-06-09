'use strict';

const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');
const phones = require('../phones.json');

describe('constructor', function(){
    it('register created', function(){
        const telephones=new PhoneRegister(phones);
        expect(telephones.register).to.deep.equal(phones);
    });

    it('missing parameter throws exception', function(){
        expect(function(){
            new PhoneRegister();
        }).to.throw('phone info missing');
    });
});

describe('test getTypes', function(){
    describe('default data', function(){
        let telephones;
        beforeEach(function(){
            telephones=new PhoneRegister(phones);
        });

        it('method getTypes is defined', function(){
            expect(telephones).to.have.a.property('getTypes');
        });

        it('all types', function(){
            expect(telephones.getTypes().sort())
                .to.deep.equal(["home","work","mobile"].sort());
        });
    });
    describe('non-default data', function(){
        it('persons with no phones', function(){
            const testData = [
                {
                    "firstname": "Leila",
                    "lastname": "Hökki",
                    "phones": []
                },
                {
                    "firstname": "Matt",
                    "lastname": "River",
                    "phones": []
                }
            ];

            const telephones=new PhoneRegister(testData);
            expect(telephones.getTypes()).to.deep.equal([]);
        });
        
        it('empty phoneregister', function(){
            const telephones=new PhoneRegister([]);
            expect(telephones.getTypes()).to.deep.equal([]);
        });
    });
});

describe('getNumbersByType', function(){
    let telephones;
    beforeEach(function(){
        telephones=new PhoneRegister(phones);
    });

    const testValues = [
        { firstname: 'Leila', lastname: 'Hökki', type: 'home', expected: ["12345678"]},
        { firstname: 'Matt', lastname: 'River', type: 'work', expected: ["32121367", "7635462"] },
        { firstname: 'Matt', lastname: 'River', type: 'x', expected: [] },
        { firstname: 'Matt', lastname: 'x', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'River', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'y', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'y', type: 'z', expected: [] }
    ];
                            //to is testObject
    testValues.forEach(function(to){
        it(`getNumbersByType('${to.firstname}','${to.lastname}','${to.type}') returns [${to.expected}]`,
        function(){
            expect(telephones.getNumbersByType(to.firstname,to.lastname,to.type))
                .to.deep.equal(to.expected);
        });
    });
});

describe('getAllNumbersByType', function(){
    it('all home numbers', function(){
        const expectedResult=[
            { "firstname": "Leila", "lastname": "Hökki", "number": { "type": "home", "tel": "12345678" } },
            { "firstname": "Matt", "lastname": "River", "number": { "type": "home", "tel": "56834923" } }
        ];

        const telephones=new PhoneRegister(phones);
        expect(telephones.getAllNumbersByType('home')).to.deep.equal(expectedResult);
    });
});