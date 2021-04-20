# Test cases for method getTypes

## **getName(number)**

The method searches the given phone number from the phone registry. If the number if found, it returns an json object of form:

```json
{"firstname":"", "lastname":""}
```
If no phone with the given number is found, `null` is returned
If the parameter is missing `null` is returned

## Test cases 

### Test1: get name of number "12345678"

call: 
```js
phoneRegister.getName("12345678")
````

expect to return: 
```json
 { "firstname":"Leila", "lastname":"Hökki" }
```

### Test2: get name of wrong number "0000"

call: 
```js
phoneRegister.getName("0000")
````

expect to return `null`

### Test3: missing parameter

call: 
```js
phoneRegister.getName()
````

expect to return `null`

### Test4: get name of numbers

```js
const testValues = [
  // Test value   Expected result
  ["87654321", { "firstname":"Leila", "lastname":"Hökki" }],
  ["05040302", { "firstname":"Leila", "lastname":"Hökki" }],
  ["56834923", { "firstname":"Matt", "lastname":"River" }],
  ["32121367", { "firstname":"Matt", "lastname":"River" }],
  ["7635462", { "firstname":"Matt", "lastname":"River" }]
]
```
