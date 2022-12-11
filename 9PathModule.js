const path=require('path')

console.log(path.sep);
const filePath= path.join('/content','subfolder','text.txt');

console.log(filePath)
const filePth= path.join('/content/','subfolder','text.txt');
console.log(filePth)

const base=path.basename(filePath)
console.log(base)

// This is used as we need to provide sometimes
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
