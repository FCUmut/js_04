if (true) {
  console.log("True");
}
if (false) {
  console.log("False");
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  // const z = 20;
  // let z = 20;
  var z = 20;
  console.log(`${z} is 20`);
}

// error occours because 'let' and 'const' are block level scope
// var is not block level scope it is function scope so there is no error
console.log(z);

// Shorthand If
// if (x >= y) console.log("true");
if (x >= y)
  console.log(`${x} is greater than or equal to ${y}`),
    console.log("this is true");
else console.log("false");
