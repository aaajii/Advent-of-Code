const fs = require("fs");
const text = fs.readFileSync("./input.txt")+'';
const input = text.split("\n")

let a = b = input

let pair = [];

a.forEach(i => {
  b.forEach(j=> {
    i = parseInt(i)
    j = parseInt(j)
    if (i+j==2020) {
      pair = [i,j]
    }
  })
})

console.log(pair.reduce((x,z)=>x*z))