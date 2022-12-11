//This we'll keep local
const secret = 'SUPER SECRET'
// This share
const john='john'
const peter='peter'
// Every file is a module
// exports is an object which we can see when we do 
// console.log(module);
module.exports={john,peter};
// These I'll be accessing in modules.js 