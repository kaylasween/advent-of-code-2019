let counter = 0
let potentialPasscodes = []
let hasSameDigitAdjacentToCurrentDigit = []
let sortedOrder = []

for (i = 136760; i <= 595730; i++){
  let pass = i.toString()
  let sortedPass = pass.split("").sort()
  if(pass === sortedPass.join('')){
    sortedOrder.push(pass)
  }
  for (j=0; j < pass.length; j++) {
    if(pass[j] === pass[j+1] && pass[j] !== pass[j+2] && pass[j] !== pass[j-1]){
      hasSameDigitAdjacentToCurrentDigit.push(pass)
    }
  }
}
hasSameDigitAdjacentToCurrentDigit = hasSameDigitAdjacentToCurrentDigit.map(pass => pass*1)
console.log(hasSameDigitAdjacentToCurrentDigit)

sortedOrder = sortedOrder.map(pass => pass*1)
console.log(sortedOrder)
potentialPasscodes = sortedOrder.filter(value => hasSameDigitAdjacentToCurrentDigit.includes(value))
counter = potentialPasscodes.length

console.log(counter)