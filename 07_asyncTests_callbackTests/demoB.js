'use strict';

const getCar = require('./carstorageFileCallback');

getCar(console.log);
console.log('one');
getCar(console.log,'licence','ABC-1');
console.log('two');
getCar(data=>console.log(data),'model','Hoppa');
console.log('three');
