const age = 19;

// Using an if statement
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

// Using a ternary operator
age >= 18 ? console.log("You can vote") : console.log("You can not vote");

// Assigning a conditional value to a variable
// const canVote = age >= 18 ? true : false;
// const canVote = age >= 18; // shorter version
const canVote = age >= 18 ? "You can vote" : "You can not vote";

console.log(canVote);

// Multiple Statements
const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dashboard")
//   : (alert("Access Denied"), "/login");

// console.log(redirect);

// you cant left statement without 'else'
// auth ? console.log('Welcome to the dashboard');

// you need else statement - ":"
// if you don't want to fill else statement, you can pass it as "null"
// auth ? console.log("Welcome to the dashboard") : null;

// another option for passing without else statement or else with null
auth && console.log("Welcome to the dashboard");
