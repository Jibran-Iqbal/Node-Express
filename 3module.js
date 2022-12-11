// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names=require('./4firstModule')
console.log(names);


const sayHi=require('./5utils')


sayHi('Jibran');
sayHi(names.john);
sayHi(names.peter);

const data= require('./6altsyntax')
console.log(data);

require('./7mindGrenade');
// Here I have exported the whole file as they by default are modules
