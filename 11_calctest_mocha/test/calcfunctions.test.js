'use strict';

const expect = require('chai').expect;

const calcfunctions = require('../calcfunctions');

describe('test if functions are defined', function(){
    it('sum is a function', function(){
        expect(calcfunctions.sum).to.be.a('function');
    });

    it('subtract is a function', function(){
        expect(calcfunctions.subtract).to.be.a('function');
    })
});

describe('test sum with integer testCases', function(){
    const testCases=[
        {a:1, b:1, expected:2},
        { a: 2, b: 3, expected: 5 },
        { a: -2, b: -4, expected: -6 },
        { a: -2, b: 4, expected: 2 },
        { a: 2, b: -4, expected: -2 },
        { a: 0, b: 0, expected: 0 } //and more...
    ];

    testCases.forEach(function (testCase){
        it(`sum(${testCase.a},${testCase.b}) = ${testCase.expected}`, function(){
            expect(calcfunctions.sum(testCase.a,testCase.b)).to.equal(testCase.expected);
        });
    });
});

describe('test sum with floats', function(){
    const testCases=[
        { a: 10, b: 11.5, expected: 21.5 },
        { a: 2.5, b: 3, expected: 5.5 },
        { a: -2.5, b: 3, expected: 0.5 },
        { a: 2.4, b: -2.5, expected: -0.1 }//and more...
    ];

    testCases.forEach(function (testCase){
        it(`sum(${testCase.a},${testCase.b}) = ${testCase.expected}`, function(){
            expect(calcfunctions.sum(testCase.a, testCase.b)).to.be.closeTo(testCase.expected, 0.01);
        });
    });
});

describe('Missing parameters', function(){
    const testCases=[
        {a:null, expected:'parameter missing'},
        { a: 1, expected: 'parameter missing'}
    ];

    testCases.forEach(function(testCase){
        it(`sum(${testCases.a}) throws an exception ${testCase.expected}`, function(){
            expect(function(){
                calcfunctions.sum(testCase.a);
            }).to.throw(testCase.expected);
        });
    });
});

describe('single test', function(){
    it('sum(1,1)=2', function(){
        expect(calcfunctions.sum(1,1)).to.equal(2);
    });

    it('Parameter not a number', function(){
        expect(function(){
            calcfunctions.sum('a','b');
        }).to.throw('only numbers allowed');
    });
});