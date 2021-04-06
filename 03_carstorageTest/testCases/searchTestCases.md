# **search(key,value)** tests cases

```json
[
    {"model": "Bored T-Model", "licence": "XYZ-987", "type": "XL"},
    {"model": "Nova", "licence": "ABC-1", "type": "GT"},
    {"model": "Bored T-Model", "licence": "ABE-13", "type": "XL"},
    {"model": "Nova", "licence": "DFG-123", "type": "GTX"}
]
```

Function returns all cars which matches the given (key, value) pair.

Parameters:
`key`: search criterion. Valid keys are `model`, `licence`, `type`
`value`: value to be searched

- if one or both paramaters are missing, function throws an exception: `"parameter missing"`
- if the key is not valid, function throws an exception: `"key not found"`

Function returns:
-   function returns all cars matching the given (key,value) pair as an array of car objects
-   if no car matches the given criterion, an empty array is returned

#### Test 1: search with model 'Nova'
call: search('model', 'Nova')
expect: [
    {"model": "Nova", "licence": "ABC-1", "type": "GT"},
    {"model": "Nova", "licence": "DFG-123", "type": "GTX"}
]

#### Test2: search with model 'X'
call: search('model', 'X')
expect: []

### Test3: search with licence 'ABC-1'
call: search('licence', 'ABC-1')
expect: 
[
    {"model": "Nova", "licence": "ABC-1", "type": "GT"}
]

### Test4: search with licence 'X-1'
call: search('licence', 'X-1')
expect: []

### Test5: search with type 'GT'
call: search('type', 'XL')
expect: 
[
     {"model": "Bored T-Model", "licence": "XYZ-987", "type": "XL"},
    {"model": "Bored T-Model", "licence": "ABE-13", "type": "XL"}
]

### Test6: search with type 'XL'
call: search('type', 'XL')
expect: 
[ 
    {"model": "Bored T-Model", "licence": "XYZ-987", "type": "XL"},
    {"model": "Bored T-Model", "licence": "ABE-13", "type": "XL"}
]

### Test7: search with type 'X'
call: search('type', 'X')
expect: []

### Test8: Key not valid
call: search('x', 'y')
expect: to throw an exception: `'Key not found'`

### Test9: one parameter missing
call: search('model')
expect: to throw an exception: `'parameter missing'`

### Test10: both parameters missing
call: search()
expect: to throw an exception: `'parameter missing'`

(These last two cases have not been defined in API, therefore cases should be verified from API designer)
### Test11: key is an empty string
call: search('', 'Nova')
expect: to throw an exception: `'parameter missing'`

### Test12: key is string of spaces
call: search(' ', 'Nova')
expect: to throw an exception: `'key not found'`