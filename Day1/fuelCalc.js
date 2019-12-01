let fs = require("fs")

let fileContent = fs.readFileSync("/Users/kaylasween/Documents/Projects/advent-of-code-2019/Day1/input.txt", 'utf-8')

let masses = fileContent.split('\n')
console.log(masses)
let totalFuel = 0

masses.map(mass => {
  massFuel = Math.floor(mass/3) - 2
  totalFuel = totalFuel + massFuel
})

console.log(totalFuel)