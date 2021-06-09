'use strict';

module.exports = class Dice{
    constructor(upperBound=6){
        if(!Number.isInteger(upperBound)){
            throw new Error('Upper bound must be an integer');
        }
        else if(upperBound>20) {
            throw new Error('Upper bound too big');
        }
        else if(upperBound<2){
            throw new Error('Upper bound too small');
        }
        else{
            this.upperBound = upperBound;
            this.dotCount = 0;
        }
    }
// another implementation
    // constructor(upperBound = 6) {
    //     if (!Number.isInteger(upperBound)) {
    //         throw new Error('Upper bound must be an integer');
    //     }
    //     if (upperBound > 20) {
    //         throw new Error('Upper bound too big');
    //     }
    //     if (upperBound < 2) {
    //         throw new Error('Upper bound too small');
    //     }
      
    //     this.upperBound = upperBound;
    //     this.dotCount = 0;
    // }


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

    toString(){
        return this.dotCount === 0 ? 'Not rolled yet': `${this.dotCount}`;
    }
}