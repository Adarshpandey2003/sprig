// export const palette = [
//   ["0", [0, 0, 0, 255]],
//   ["1", [157, 157, 157, 255]],
//   ["L", [91, 101, 112, 255]],
//   ["2", [255, 255, 255, 255]],
//   ["3", [190, 38, 51, 255]],
//   ["4", [163, 206, 39, 255]],
//   ["5", [0, 87, 132, 255]],
//   ["6", [247, 226, 107, 255]],
//   ["7", [49, 162, 242, 255]],
//   ["8", [224, 111, 139, 255]],
//   [".", [0, 0, 0, 0]]
// ].map(([k, v]) => [k, v.map(Math.round)]);

export const palette = [
  ["0", [0, 0, 0, 255]],
  ["1", [255/2, 255/2, 255/2, 255]],
  ["L", [255/3, 255/3, 255/3, 255]],
  ["2", [255, 255, 255, 255]],
  ["3", [255, 0, 0, 255]],
  ["4", [0, 255, 0, 255]],
  ["5", [0, 0, 255, 255]],
  ["6", [255, 255, 0, 255]],
  ["7", [0, 255, 255, 255]],
  ["8", [255, 0, 255, 255]],
  [".", [0, 0, 0, 0]]
].map(([k, v]) => [k, v.map(Math.round)]);