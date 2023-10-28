//fs module
const fs= require("fs")
fs.writeFileSync("file.txt","welcme to my file.")
fs.writeFileSync("file.txt","it is working.")

//path module
var path=require("path")
var p = "D:\Self Learning\Node JS\file.txt"
console.log("extname: " +path.extname(p))
console.log("dirname: " +path.dirname(p))
console.log("basename: "+path.basename(p))
console.log("isAbsolute: "+ path.isAbsolute(p))

//buffer module - a globle obj
var buf1=Buffer.from("123456")
var buf2=Buffer.from("hello")
console.log(buf1.toString())
