'use strict';

const expect = require('chai').expect;

const Dice = require('../dice');

describe('methods defined', function(){
    const dice=new Dice();

    it('getter maximumValue defined', function(){
        expect(dice).to.have.a.property('maximumValue');
    });

    it('roll is defined', function(){
        expect(dice).to.have.a.property('roll');
    });
});

describe('Create a dice with no upper bound given', function(){
    let dice;

    beforeEach(function(){
        dice=new Dice();
    });

    it('upper bound is 6', function(){
        expect(dice.maximumValue).to.equal(6);
    });

    it('lower bound is 1', function(){
        expect(dice.minimumValue).to.equal(1);
    });
});

describe('create dice with given upperbounds 2-20', function(){
    function testUpperBound(upperBound){
        const dice=new Dice(upperBound);

        it(`upperbound is ${upperBound}`, function(){
            expect(dice.maximumValue).to.equal(upperBound);
        });
    };

    for(let uBound=2; uBound<21; uBound++){
        testUpperBound(uBound);
    };
});

describe('create dice with given upper bounds 2-20 version 2', function(){
    const upperBounds = new Array(19).fill(2).map((value, ind) => ({ uBound: value + ind }));

    upperBounds.forEach(function(testCase){
        it(`upper bound is ${testCase.uBound}`, function(){
            const dice = new Dice(testCase.uBound);
            expect(dice.maximumValue).to.equal(testCase.uBound);
        });
    });
});

describe('Test exceptions', function(){
    it('upperbound to big', function(){
        expect(function(){
            new Dice(21);
        }).to.throw('Upper bound too big');
    });

    it('Upper bound too small', function(){
        expect(function(){
            new Dice(0);
        }).to.throw('Upper bound too small');
    });

    it('must be an integer', function(){
        expect(function(){
            new Dice('a');
        }).to.throw('Upper bound must be an integer');
    });
    it('must be an integer', function () {
        expect(function () {
            new Dice(2.5);
        }).to.throw('Upper bound must be an integer');
    });
});

describe('test roll', function(){
    let dice;

    beforeEach(function(){
        dice=new Dice();
    });

    it("test when dice hasn't been rolled", function(){
        expect(dice.dots).to.equal(0);
    });

    it('test when rolled', function(){
        dice.roll();
        expect(dice.dots).to.be.within(1,6);
    });
});

describe('test toString', function(){
    let dice;

    beforeEach(function(){
        dice=new Dice();
    });

    it('dice is not rolled yet', function(){
        expect(dice.toString()).to.equal('Not rolled yet');
    });

    it('dice rolled', function(){
        dice.roll();
        expect(dice.toString()).to.equal(`${dice.dots}`);
    });
});