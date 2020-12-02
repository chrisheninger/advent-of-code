// https://adventofcode.com/2019/day/8
var fs = require('fs');
var data = fs
  .readFileSync('./advent-8.txt')
  .toString('utf-8')
  .split('');

let layers = [];
for (var i = 0; i < data.length; i++) {
  const layer = Math.floor(i / (25 * 6));
  if (layers[layer]) {
    layers[layer].push(data[i]);
  } else {
    layers = [...layers, [data[i]]];
  }
}

const getLayerWithFewestZeroes = layers => {
  return layers.reduce((previousValue, currentValue) => {
    if (previousValue.length === 0) {
      return currentValue;
    }
    if (previousValue.filter(x => x == 0).length < currentValue.filter(x => x == 0).length) {
      return previousValue;
    } else {
      return currentValue;
    }
  }, []);
};

const layerWithFewestZeroes = getLayerWithFewestZeroes(layers);
console.log(layerWithFewestZeroes.filter(x => x == 1).length * layerWithFewestZeroes.filter(x => x == 2).length);

const final = Array(25 * 6).fill('2');
layers.forEach(layer => {
  layer.forEach((pixel, i) => {
    if (final[i] == '2') {
      final[i] = pixel;
    }
  });
});

console.log(final);

console.log(final.splice(0, 25).join(''));
console.log(final.splice(0, 25).join(''));
console.log(final.splice(0, 25).join(''));
console.log(final.splice(0, 25).join(''));
console.log(final.splice(0, 25).join(''));
console.log(final.splice(0, 25).join(''));
