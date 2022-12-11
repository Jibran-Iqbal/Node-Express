// // Streams are better because in files sync and async approach we assign the complete data of the to a variable very memory unfreindly 
// // Creating a big file
// const {writeFileSync}=require('fs')
// let k=0
// for(let i=0;i<=100000;i++)
// {
//     try{
//     writeFileSync('./content/bigg.txt',`Hello world ${i}\n`,{flag:'a'})
//     }
//     catch(error){
//         k++
//     }
// }
// console.log(k)


// Done with the above code

const {createReadStream}=require('fs')

const stream= createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result)
})
// By default 64kb are stored in the buffer
// last buffer - remainder
// highWaterMark - control size of the buffer
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000})
// const stream = createReadStream('./content/big.txt',{encoding:'utf8'})
// Provide encoding so that the data is readable when using printing the data
