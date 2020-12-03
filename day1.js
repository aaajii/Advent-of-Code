const fs = require("fs");
const text = fs.readFileSync("./input.txt")+'';
const input = text.split("\n")

let a = b = c = input

let pair = [];


//this solution takes a lot of time man :(((
a.forEach(i => {
  b.forEach(j=> {
    c.forEach(k=>{
        i = parseInt(i)
        j = parseInt(j)
        k = parseInt(k)
        if (i+j+k==2020) {
          pair = [i,j,k]
        }
    })
  })
})

console.log(pair.reduce((x,z)=>x*z))