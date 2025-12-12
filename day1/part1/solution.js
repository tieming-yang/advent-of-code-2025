import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const testInput = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
]

export function getInput() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const data = readFileSync(join(__dirname, 'input.txt'), 'utf8');

  return data.trim().split("\n")
}

export function getPassword(input) {
  const SIZE = 100
  let zeros = 0
  let start = 50

  for (const instruction of input) {
    let direction = instruction[0]
    let moves = Number(instruction.slice(1))
    if (direction === "L") {
      let newStart = ((start - moves ) % SIZE + SIZE) % SIZE
      start = newStart
    } else {
      let newStart = (start + moves) % SIZE
      start = newStart
    }
    console.log({instruction, start})
    if (start === 0) zeros += 1
  }

  return zeros
}

console.log(getPassword(getInput()))