//add node 🤷‍♀️

let masses = [112908, 61769, 65967, 51494, 99689]
let totalFuel = 0

masses.map(mass => {
  massFuel = Math.floor(mass/3) - 2
  totalFuel = totalFuel + massFuel
})

console.log(totalFuel)