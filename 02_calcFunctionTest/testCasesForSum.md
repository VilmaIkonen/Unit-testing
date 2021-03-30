# Sum API 

## **sum(a, b)**
Returns the sum of two numbers, a and b. The numbers are passed to the function as parameters.

*parameters*: a and b are numbers.
*returns*: sum of a and b as a number.

- if parameter is missing, throw an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception `'only numbers allowed'`

## Test cases
### 1. Function sum defined
### 2. Sums
#### 2.1 Integers
- sum(1, 1) = 2
- a, b, expectedSum
- [1, 1, 2],
[2, 3, 5],
[-2, -4, -6],
[-2, 4, 2],
[2, -4, -2],
[0, 0, 0],
[0, 3, 0],
[4, 0, 4],
[0, -3, -3],
[-3, 0, -3]

#### 2.2. Floating points
- [10, 11.5, 21.5],
[2.5, 3, 5.5],
[-3, 2.5, -0.5],
[3, -2.5, 0.5],
[-3, -2.5, -5.5],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### 2.3 Missing parameter
- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum('x') throws an exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`
- sum(null, 1) throws an exception `'parameter missing'`
- sum(undefined, 1) throws an exception `'parameter missing'`

#### 2.4 Parameters are not numbers
- sum('x', 2) throws an exception `'only numbers allowed'`
- sum(1, 'x') throws an exception `'only numbers allowed'`
- sum('x', 'y') throws an exception `'only numbers allowed'`
- sum(' ', ' ') throws an exception `'only numbers allowed'`
