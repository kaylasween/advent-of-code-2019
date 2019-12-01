let fs = require("fs")

let fileContent = fs.readFileSync("/Users/kaylasween/Documents/Projects/advent-of-code-2019/Day1/input.txt", 'utf-8')

let masses = fileContent.split('\n')
let totalFuel = 0

masses.map(mass => {
  let massFuel = Math.floor(mass/3) - 2
  totalFuel = totalFuel + massFuel
  let fuelForFuel = massFuel
  while(fuelForFuel > 0){
    fuelForFuel = Math.floor(fuelForFuel/3) - 2
    if(fuelForFuel <= 0){
      fuelForFuel = 0
    }
    totalFuel = totalFuel + fuelForFuel
  }
})

console.log(totalFuel)