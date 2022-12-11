// Built in Modules
// OS module
// Since this is a built in module we don't need to install anything
const os=require('os')

// info about the current user
const user= os.userInfo();
console.log(user);

// Methof returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);