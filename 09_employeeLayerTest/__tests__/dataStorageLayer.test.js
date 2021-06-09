'use strict';

const { createStorageLayer } = require('../dataStorageLayer');
const sqlStatements = require('../sqlStatements.json');
const Database = require('../database');

jest.mock('../database');

describe('Testing getAll', () => {
	const expectedResult = [
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
	];

	test('get all', ()=>{
		const db = new Database({
			host: 'localhost',
			port: 3306,
			user: 'mockuser',
			password: 'secret',
			database: 'employeedb'
		});
		const employees = createStorageLayer(db,sqlStatements);
		return expect(employees.getAll()).resolves.toEqual(expectedResult);
	});
});