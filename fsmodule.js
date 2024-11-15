var fs = require('fs');
// console.log(fs)

// **callback Pattern
fs.readFile("students.txt",function(err,data){
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data.toString())
    }
})

// **return Pattern
var dt=fs.readFileSync('students.txt');
console.log(dt.toString())

// **promises Pattern
fs.promises.readFile('students.txt')
.then(function(data){console.log(data.toString())})
.catch(err=>console.log(err.message))

fs.writeFileSync("kbdplayers.txt","Rahul Pardeep vishal Ajay Rohit Kashi Rajesh",function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})