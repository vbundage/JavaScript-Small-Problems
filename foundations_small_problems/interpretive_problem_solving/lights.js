let lightsOn = function(switches) {
  let lightState = Array(switches).fill(false);

  for (let count = 1; count <= switches; count += 1) {
    lightState = lightState
              .map((light,index) => (index + 1) % count === 0 ? !light : light);
  }

  return lightState
                .map((_, idx) => idx + 1)
                .filter((_, idx) => lightState[idx] === true);
};

console.log(lightsOn(5));
console.log(lightsOn(100));
