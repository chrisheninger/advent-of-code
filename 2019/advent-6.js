// https://adventofcode.com/2019/day/6
var fs = require('fs');
var data = fs
  .readFileSync('./advent-6.txt')
  .toString('utf-8')
  .split('\n');

const mapAndCalculateOrbits = data => {
  let orbitMap = {};
  data.forEach(orbit => {
    const bodies = orbit.split(')');
    if (!orbitMap[bodies[1]]) {
      orbitMap[bodies[1]] = bodies[0];
    }
  });
  console.log(orbitMap);

  let orbits = 0;
  const calculateOrbits = (body, map) => {
    if (map[body]) {
      orbits++;
      return calculateOrbits(map[body], map);
    }
    return orbits;
  };

  Object.keys(orbitMap).forEach(body => {
    calculateOrbits(body, orbitMap);
  });

  console.log(orbits);
};

mapAndCalculateOrbits(data);
