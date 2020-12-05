// https://adventofcode.com/2020/day/5
const fs = require("fs");
const data = fs.readFileSync("./advent-5.txt").toString("utf-8").split("\n");

// Example: FBFBBFFRLR = row 44, column 5

// part 1 🌟
let highestSeatId = 0;

data.forEach((ticket) => {
  const ticketRow = ticket.substring(0, 7).split("");
  const ticketColumn = ticket.substring(7, 10).split("");
  let rowMin = 0;
  let rowMax = 127;
  let columnMin = 0;
  let columnMax = 7;

  ticketRow.forEach((indicator) => {
    if (indicator === "F") {
      rowMax = Math.floor((rowMax - rowMin) / 2) + rowMin;
    } else if (indicator === "B") {
      rowMin = rowMax - Math.floor((rowMax - rowMin) / 2);
    }
  });

  ticketColumn.forEach((indicator) => {
    if (indicator === "L") {
      columnMax = Math.floor((columnMax - columnMin) / 2) + columnMin;
    } else if (indicator === "R") {
      columnMin = columnMax - Math.floor((columnMax - columnMin) / 2);
    }
  });

  if (rowMin === rowMax && columnMin === columnMax) {
    const seatId = rowMin * 8 + columnMin;
    if (seatId > highestSeatId) {
      highestSeatId = seatId;
    }
  } else {
    throw new Error("omfg something went wrong");
  }
});

console.log("highestSeatId", highestSeatId);

// part 2 🌟
let seatIds = [];
data.forEach((ticket) => {
  const ticketRow = ticket.substring(0, 7).split("");
  const ticketColumn = ticket.substring(7, 10).split("");
  let rowMin = 0;
  let rowMax = 127;
  let columnMin = 0;
  let columnMax = 7;

  ticketRow.forEach((indicator) => {
    if (indicator === "F") {
      rowMax = Math.floor((rowMax - rowMin) / 2) + rowMin;
    } else if (indicator === "B") {
      rowMin = rowMax - Math.floor((rowMax - rowMin) / 2);
    }
  });

  ticketColumn.forEach((indicator) => {
    if (indicator === "L") {
      columnMax = Math.floor((columnMax - columnMin) / 2) + columnMin;
    } else if (indicator === "R") {
      columnMin = columnMax - Math.floor((columnMax - columnMin) / 2);
    }
  });

  if (rowMin === rowMax && columnMin === columnMax) {
    const seatId = rowMin * 8 + columnMin;
    seatIds.push(seatId);
  } else {
    throw new Error("omfg something went wrong");
  }
});

const tickets = new Array(highestSeatId + 1).fill();

tickets.forEach((undefined, index) => {
  if (seatIds.includes(index)) {
  } else {
    console.log(index);
  }
});
