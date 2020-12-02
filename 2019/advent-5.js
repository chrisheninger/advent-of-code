// https://adventofcode.com/2019/day/5
var fs = require('fs');
var data = fs
  .readFileSync('./advent-5.txt')
  .toString('utf-8')
  .split(',');

// From day 2
const gravityAssistProgram = (data, input) => {
  const blah = (data, index) => {
    const value = `${data[index]}`;
    const instruction = value.padStart(5, '0');
    const opcode = instruction.substring(3, 5);
    const firstParam = instruction.substring(2, 3);
    const secondParam = instruction.substring(1, 2);
    const thirdParam = instruction.substring(0, 1);
    console.log(instruction);
    if (opcode === '01') {
      if (thirdParam === '0') {
        data[data[index + 3]] =
          (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) +
          (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      if (thirdParam === '1') {
        data[index + 3] =
          (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) +
          (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      return blah(data, index + 4);
    }
    if (opcode === '02') {
      if (thirdParam === '0') {
        data[data[index + 3]] =
          (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) *
          (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      if (thirdParam === '1') {
        data[index + 3] =
          (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) *
          (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      return blah(data, index + 4);
    }
    if (opcode === '03') {
      data[data[index + 1]] = input;
      return blah(data, index + 2);
    }
    if (opcode === '04') {
      console.log('diagnostic code', data[data[index + 1]]);
      return blah(data, index + 2);
    }
    if (opcode === '05') {
      if ((firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) != 0) {
        return blah(data, secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      return blah(data, index + 3);
    }
    if (opcode === '06') {
      if ((firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) == 0) {
        return blah(data, secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]));
      }
      return blah(data, index + 3);
    }
    if (opcode === '07') {
      data[data[index + 3]] =
        (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) <
        (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]))
          ? 1
          : 0;
      return blah(data, index + 4);
    }
    if (opcode === '08') {
      data[data[index + 3]] =
        (firstParam === '0' ? Number(data[data[index + 1]]) : Number(data[index + 1])) ===
        (secondParam === '0' ? Number(data[data[index + 2]]) : Number(data[index + 2]))
          ? 1
          : 0;
      return blah(data, index + 4);
    }
    if (opcode === '99') {
      return data;
    }
  };

  return blah(data, 0);
};

const exampleData = [1, 1, 1, 4, 99, 5, 6, 0, 99];
const exampleData2 = [1101, 100, -1, 4, 0];
const exampleData3 = [
  3,
  21,
  1008,
  21,
  8,
  20,
  1005,
  20,
  22,
  107,
  8,
  21,
  20,
  1006,
  20,
  31,
  1106,
  0,
  36,
  98,
  0,
  0,
  1002,
  21,
  125,
  20,
  4,
  20,
  1105,
  1,
  46,
  104,
  999,
  1105,
  1,
  46,
  1101,
  1000,
  1,
  20,
  4,
  20,
  1105,
  1,
  46,
  98,
  99,
];
const exampleData4 = [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9];

console.log(gravityAssistProgram(data, 5));
