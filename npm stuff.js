// npm - global command, comes with node 
// npm --version
//local dependency - use it oly in this particlar project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defalut)


const _ =require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems) 
console.log("Hello")
// A package can be installed globally by using the command
// sudo npm install -g <name of the package> 
// This can also be done using the terminal the cmd like thing



// In a package the version number say x.y.z
// x means a major change
// y means a backward compatible change
// z means a patch work for the bug fix