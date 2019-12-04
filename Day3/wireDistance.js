let fs = require("fs")

let fileContent = fs.readFileSync(
  "/Users/kaylasween/Documents/Projects/advent-of-code-2019/Day3/input.txt",
  "utf-8"
)
let wires = fileContent.split("\n")
let paths = {}
wires = wires.map(wire => wire.split(",")).map(direction => direction.map(wire => [wire[0], wire.slice(1, 10) * 1]))

for (i = 0; i < wires.length; i++) {
  let x = 0 
  let y = 0

  for(j = 0; j < wires[i].length; j++) {
    if(wires[i][j][0] === 'R') {
      x = x + wires[i][j][1]
    } else if (wires[i][j][0] === 'L') {
      x = x - wires[i][j][1]
    } else if (wires[i][j][0] === 'U') {
      y = y + wires[i][j][1]
    } else if (wires[i][j][0] === 'D') {
      y = y - wires[i][j][1]
    }

    if(`${x}, ${y}` in paths && paths[`${x}, ${y}`] !== i + 1) {
      paths[`${x}, ${y}`] = 10
    } else {
      paths[`${x}, ${y}`] = i + 1
    }
  }
}

let distances = Object.keys(paths)
    .filter(coordinates => paths[coordinates] === 10) //get coordinates that had been used by both wires
    .map(coordinates =>
      coordinates.split(', ').map(d => d * 1).map(Math.abs)
    )
    .map(e => e[0] + e[1]) // get Manhattan distance
console.log(distances)

console.log(paths)
