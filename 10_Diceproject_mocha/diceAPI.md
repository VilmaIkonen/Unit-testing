# Dice class (API)

This is a Dice class for dice games. Dice has a field that holds the number of dots. The dot number is between 1 and the given upper bound. The maximum upper bound is 20. If the dice hasn't been rolled, the number of dots is 0. 

## Operations

### **constructor()**

-   initializes the dice with upper bound that is passed in as a parameter
-   initializes dot count to 0
-   if upper bound parameter is missing, then the default upper bound is 6

-   if the given upper bound is not integer, throws an exception `'Upper bound must be an integer'`
-   if the upper bound is not between 2 and 20, an exception is thrown:
    -   upper bound > 20 : `'Upper bound too big'`
    -   upper bound < 2 : `'Upper bound too small'`

### **getters**

#### **minimumValue**
-   It should be 1.

#### **maximumValue**
-   returns the upper bound of the dice.

#### **dots**
-   returns the number of dots. 

### **methods**

#### **roll()**

-   rolls the dice
-   dot count become a random number between 1 and the upper bound
-   when the dice is rolled, the dot count can't become zero again.
-   returns nothing

#### **toString()**
-   returns dot count as a string. For example: `'4'`;
-   if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`


# Test cases

## Test if maximumValue and roll are defined


## Test: create a dice with no upper bound given
-   create dice with lower bound 1 and upper bound 6
-   dot count is initialized to 0

case: new Dice()
expect: minimumValue to be 1 and maximumValue to be 6, dots to be 0

## Test: create the dice with upperbounds 2 to 20
case: new Dice(2)...new Dice(20)
expect: maximumValue to be the used upper bound

## Test: test exceptions when the upper bound is wrong
-   new Dice(21) throws `'Upper bound too big'`
-   new Dice(-1) throws `'Upper bound too small'`
-   new Dice(0) throws `'Upper bound too small'`
-   new Dice(1) throws `'Upper bound too small'`
-   new Dice('a') throws `'Upper bound must be an integer'`
-   new Dice(2.5) throws `'Upper bound must be an integer'`

## Test minimumValue is always 1
case: new Dice()
expect: minimumValue to be 1

## Test roll
case: new Dice()
expect: dots to be 0 , if not rolled yet
        when rolled dots toBeGreaterThanOrEqual(1) and
        toBeLessThanOrEqual(6)
        
case: new Dice(20)
expect: dots to be 0 , if not rolled yet
        when rolled dots toBeGreaterThanOrEqual(1) and
        toBeLessThanOrEqual(20)

## Test toString()
case: new Dice()
expect: text `'Not rolled yet'`if dice is not rolled

case: new Dice()
roll the dice
expect: dots (cast to string first) to equal text returned from toString