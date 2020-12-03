const fs = require("fs");
const text = fs.readFileSync("./input.txt")+'';
const input = text.split("\n")


const checkTree = (right, down) =>{
  let cooldown=down
  let current_position = 0
  let count = 0
  input.forEach(line=>{
    if(cooldown==0){
      current_position = (current_position+right)%(line.length)
      let character = line[current_position]
      if (character=='#') count++

      cooldown = down-1
    }else{
      cooldown -= 1
    }
  })

  return count

}

let count1 = checkTree(1,1)
let count2 = checkTree(3,1)
let count3 = checkTree(5,1)
let count4 = checkTree(7,1)
let count5 = checkTree(1,2)

console.log(count1*count2*count3*count4*count5)