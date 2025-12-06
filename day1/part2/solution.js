import { getInput, testInput } from "../part1/solution.js"

export function getPassword(input) {
  const SIZE = 100
  let zeros = 0
  let start = 50

  for (const instruction of input) {
    console.log("=========================================")
    let direction = instruction[0]
    let moves = Number(instruction.slice(1))

    console.log({ instruction })


    if (direction === "L") {
      if (moves >= SIZE) {
        const circles = Math.floor(moves / SIZE)
        zeros += circles
      }

      if (start !== 0 && start - (moves % SIZE) <= 0) {
        zeros++
        console.log("moves in left", instruction, moves, zeros)
      }

      const step = moves % SIZE; 
      start = ((start - step) % SIZE + SIZE) % SIZE;
      // let newStart = (start - moves + SIZE) % SIZE
      // start = newStart

    } else {
      if (moves >= SIZE) {
        const circles = Math.floor(moves / SIZE)
        zeros += circles
      }

      if (start !== 0 && start + (moves % SIZE) > 99) {
        zeros++
        console.log("moves in right", instruction, moves, zeros)
      }

      let newStart = (start + moves) % SIZE
      start = newStart
    }
    console.log("start at the end", start)
  }

  return zeros
}


const password = getPassword(getInput())
// const password = getPassword(testInput)
console.log({ password })
