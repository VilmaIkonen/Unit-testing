'use strict';

const { TestScheduler } = require('jest');
const Dice = require('../dice.js');

describe('getters and methods defined', ()=>{
    let dice = new Dice();

    test('getter maximumValue defined', ()=>{
        expect(dice.maximumValue).toBeDefined();
    });

    test('method roll() is defined', ()=>{
        expect(dice.roll).toBeDefined();
    });
});

describe('Testing constructor with out upper limit', ()=>{
    let dice = new Dice();

    test('upper bound is 6', ()=>{
        expect(dice.maximumValue).toBe(6);
    });

    test('minimum value is 1', ()=>{
        expect(dice.minimumValue).toBe(1);
    });

    test('dot count is 0', ()=>{
        expect(dice.dots).toBe(0);
    });

    test('dice constructed ok', ()=>{
        expect(dice.maximumValue).toBe(6);
        expect(dice.minimumValue).toBe(1);
        expect(dice.dots).toBe(0);
    });
});

describe('Test upperlimits 2 to 20', ()=>{
    const upperBounds = new Array(19).fill(2).map((value,ind)=>[value+ind]);

    test.each(upperBounds)('test upper bound %s', upperBound=>{
        let dice=new Dice(upperBound);
        expect(dice.maximumValue).toBe(upperBound);
    });
});

describe('Test rolling the dice', ()=>{
    let dice;

    beforeEach( ()=>{
        dice=new Dice();
    });

    test('dice not rolled yet', ()=>{
        expect(dice.dots).toBe(0);
    });

    test('dice has been rolled', ()=>{
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(6);
    });  
});

