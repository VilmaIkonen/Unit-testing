'use strict';

const sqlStatements = require('../sqlStatements.json');

const getAllSql = sqlStatements.getAll.join(' ');

const resultForGetAll = [
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

module.exports = class Database {

	constructor(options){
		this.options=options;
	};

	doQuery(sql, parameters, connection){
		return new Promise(async (resolve,reject)=>{
			if(sql.toLowerCase()===getAllSql.toLowerCase()) {
				resolve({
						queryResult: resultForGetAll,
						resultSet:true
				})
			}
			else {
				reject('SQL-error');
			}
		});
	};

} //end of class

