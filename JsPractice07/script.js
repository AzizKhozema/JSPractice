const colors = ["red", , "blue"];

// Destructure the array as:
// - primary = first element
// - skip second element
// - secondary = third element
// - if any is undefined, default to "green"
// Then log primary and secondary

// const [primary , , secondary] = colors;
const [primary = "green", , secondary = "green"] = colors;

console.log(primary);
console.log(secondary);
