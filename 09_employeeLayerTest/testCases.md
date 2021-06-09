# Test cases

## Test data
```js
all = [
	{
		employeeId: 1,
		firstname: 'Mattx',
		lastname: 'River',
		department: 'ict',
		salary: 3000
	},
	{
		employeeId: 2,
		firstname: 'Mary',
		lastname: 'Smith',
		department: 'admin',
		salary: 7000
	}
]
```

### Testing getAll()
expect to resolve to all (.js above)

### Testing get(id)
1. Test get employee with id 2
expect to resolve to all[1]

2. Test get employee with id 3
expect to resolve to {}

3. Test get employee with id 'x'
rejects to 'Something went wrong'