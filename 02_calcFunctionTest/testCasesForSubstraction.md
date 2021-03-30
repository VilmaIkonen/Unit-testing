# Substract API 

## **substraction(a, b)**
Returns the difference a - b. The numbers are passed to the function as parameters.

*parameters*: a and b are numbers.
*returns*: difference of a - b as a number.

- if parameter is missing, throw an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception `'only numbers allowed'`

## Test cases
### 1. Function substract is defined
### 2. Substractions
#### 2.1 Integers
- diff(2, 1) = 1
- a, b, expectedSum
- [1, 1, 0],
[2, 3, -1],
[-2, -4, 2],
[2, 4, -2],
[-2, 4, -6],
[2, -4, 6],
[0, 0, 0],
[0, 3, -3],
[3, 0, 3],
[0, -3, 3],
[-3, 0, -3]

#### 2.2. Floating points
- [10, 9.5, 0.5],
[2.5, 2, 0.5],
[-3, 2.5, 0.5],
[3, -2.5, 5.5],
[-3, -2.5, -0.5],
[2.5, -2.5, 5],
[2.4, -2.5, 0.1]

#### 2.3 Missing parameter
- substract() throws an exception `'parameter missing'`
- substract(1) throws an exception `'parameter missing'`
- substract('x') throws an exception `'parameter missing'`
- substract('') throws an exception `'parameter missing'`
- substract(null, 1) throws an exception `'parameter missing'`
- substract(undefined, 1) throws an exception `'parameter missing'`

#### 2.4 Parameters are not numbers
- substract('x', 2) throws an exception `'only numbers allowed'`
- substract(1, 'x') throws an exception `'only numbers allowed'`
- substract('x', 'y') throws an exception `'only numbers allowed'`
- substract(' ', ' ') throws an exception `'only numbers allowed'`
