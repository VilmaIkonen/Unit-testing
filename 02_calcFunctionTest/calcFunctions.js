'use strict';

const onlySpaces =/^[ ]*$/g;

exports.sum = (a, b) => {
  // if((a && b)) {
  //   return a + b;
  // }
  // else {
  //   throw new Error('parameter missing'); // --> error eg. from sum(0,3) as JS interprets 0 as null
  // }  
  if((a == undefined || b == undefined)) {
    throw new Error('parameter missing') // This way 0's are OK
  }
  if(Number.isNaN(Number(a)) || Number.isNaN(Number(b))){
    throw new Error('only numbers allowed')
  }
  if(onlySpaces.test(a) || onlySpaces.test(b)) {
    throw new Error('only numbers allowed')
  }
  else {
    return a + b; 
  }  
}