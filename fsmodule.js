var fs = require('fs');
// console.log(fs)

// **callback Pattern
// fs.readFile("students.txt",function(err,data){
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// **return Pattern
// var dt=fs.readFileSync('students.txt');
// console.log(dt.toString())

// **promises Pattern
// fs.promises.readFile('students.txt')
// .then(function(data){console.log(data.toString())})
// .catch(err=>console.log(err.message))

// fs.writeFileSync("kbdplayers.txt","Rahul Pardeep vishal Ajay Rohit Kashi Rajesh",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// Delete promises pattern
// fs.promises.unlink("kbdplayers.txt")
// .then(function(data){data})
// .catch(err=>{console.log(err)})

// Delete return pattern
// var del=fs.unlinkSync('kbd.txt')
// console.log(del)

// Delete callback pattern
// fs.unlinkSync('kbd.txt',function(data,err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })