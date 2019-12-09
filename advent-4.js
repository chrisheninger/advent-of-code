// 278384-824795

function checkIfDuplicateExists(valueArray) {
  return new Set(valueArray).size !== valueArray.length;
}

function checkIfDuplicateExistsPartTwo(valueArray) {
  const counts = {};
  valueArray.forEach(value => {
    counts[value] = (counts[value] || 0) + 1;
  });
  if (Object.values(counts).indexOf(2) !== -1) {
    return true;
  }
  return false;
}

const results = [];

const checkValue = value => {
  const stringifiedValueArray = value.toString().split('');
  if (
    stringifiedValueArray[0] <= stringifiedValueArray[1] &&
    stringifiedValueArray[1] <= stringifiedValueArray[2] &&
    stringifiedValueArray[2] <= stringifiedValueArray[3] &&
    stringifiedValueArray[3] <= stringifiedValueArray[4] &&
    stringifiedValueArray[4] <= stringifiedValueArray[5] &&
    checkIfDuplicateExistsPartTwo(stringifiedValueArray)
  ) {
    results.push(stringifiedValueArray);
  }
};

for (var i = 278384; i < 824795; i++) {
  checkValue(i);
}

console.log(results.length);
