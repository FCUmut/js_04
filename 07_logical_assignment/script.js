// ||= assigns the right side value only if the left is a falsy value.
let a = false;

if (!a) {
  a = 20;
}

a = a || 20;
// shorter version
a ||= 20;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = true;

if (b) {
  b = 30;
}

b = b && 30;
b &&= 30;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined

let c = undefined;

if (c === null || c === undefined) {
  c = 40;
}

// these are not working
c = c ?? 40;
c ??= 40;

console.log(c);
