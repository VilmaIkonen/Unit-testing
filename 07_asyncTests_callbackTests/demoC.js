'use strict';

const getCar=require('./carstorageFileCallback2');

try{
    getCar();
}
catch(err){
    console.log(err.message);
}

getCar('licence','ABC-1',console.log);
getCar('model','Hoppa',data=>{
    for(let car of data){
        console.log(car.licence);
    }
});

getCar('model','Kaara', printData);

function printData(data) {
    console.log(data);
}
try{
    getCar('model', 'Hoppa');
}
catch(e){
    console.log('e=',e.message);
}
