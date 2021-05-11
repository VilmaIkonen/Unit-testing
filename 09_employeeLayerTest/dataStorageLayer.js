'use strict';

function createStorageLayer(dbEngine, sqlStatements){
    const getAllSql=sqlStatements.getAll.join(' ');
    const getSql = sqlStatements.get.join(' ');
    const insertSql = sqlStatements.insert.join(' ');
    const removeSql = sqlStatements.delete.join(' ');


    class DbLayer{

        constructor() {
            this.db=dbEngine;
        }

        getAll() {
            return new Promise( async (resolve,reject)=>{
                try{
                    const result = await this.db.doQuery(getAllSql);
                    if(result.resultSet){
                        resolve(result.queryResult);
                    }
                    else {
                        reject('Something went wrong');
                    }
                }
                catch(err) {
                    reject('error');
                }
            })
        }
    } //end of class

    return new DbLayer();

} //end of createStorageLayer

module.exports = { createStorageLayer}