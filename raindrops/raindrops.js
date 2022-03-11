//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (x) => {
  let raindrops = ''
  if (x % 3 === 0) raindrops += 'Pling';
  if (x % 5 === 0) raindrops += 'Plang';
  if (x % 7 === 0) raindrops += 'Plong';
  return raindrops || x.toString()
};
