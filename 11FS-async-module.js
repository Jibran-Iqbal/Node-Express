const {readFile, writeFile}=require('fs')
console.log('Starting task-1')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is the result:${first},${second}`
        ,(err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log('Done with the task-1')
        })
    })
})
console.log('Starting task-2')
console.log('Done with task-2')
// The output is as it is because the 2 functions imported above are async functions
