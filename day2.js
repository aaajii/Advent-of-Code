const fs = require("fs");
const text = fs.readFileSync("./input.txt")+'';
const input = text.split("\n")

let count = 0;

input.forEach(element=>{
  //Get the necessary values per line
  let line = element.split(" ")
  let a = line[0].slice(0,line[0].search("-"))
  let b = line[0].slice(line[0].search("-")+1)
  let key = line[1].slice(0,line[1].search(":"))
  let password = line[2]
  let counter = 0
  
  let x = password.split(key).length-1

  if (x>=a && x<=b)count++


})


console.log(count)