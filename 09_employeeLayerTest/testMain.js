'use strict';

const sqlStatements = require('./sqlStatements.json');
// const Database = require('./database');
const Database = require('./__mocks__/database');

const options={
    host:'localhost',
    port:3306,
    user:'mockuser',
    password:'secret',
    database:'employeedb'
};

const empDb=new Database(options);
const { createStorageLayer } =require('./dataStorageLayer');
const storage = createStorageLayer(empDb,sqlStatements);

storage.getAll().then(console.log).catch(console.log);