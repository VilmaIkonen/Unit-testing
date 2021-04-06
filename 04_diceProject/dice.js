'use strict';

module.exports = class Dice{
    constructor(upperBound=6){
        this.upperBound=upperBound;
        this.dotCount=0;
    }

    get minimumValue() {
        return 1;
    }

    get maximumValue(){
        return this.upperBound;
    }

    get dots() {
        return this.dotCount;
    }

    roll() {
        this.dotCount=Math.ceil(Math.random()*this.upperBound);
    }
}