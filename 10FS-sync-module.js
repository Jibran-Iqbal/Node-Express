const {readFileSync, writeFileSync,} = require('fs');
// const fs = require('fs');
// fs.readFileSync();

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
// utf8 is by default and therefore that parameter can be omitted
console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`);
// If the file is not there node will create one and if it is there then node will overwrite
// 
// Now if we want to append a value then we use.....
writeFileSync('./content/result-sync.txt','Here I have appended the text instead of overwriting it',{flag:'a'});
