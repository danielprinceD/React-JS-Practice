const input = require("readline-sync");
let int = Number(input.question());
var ans = 1;
let fact = (a) => {
  if (a > 1) {
    return a * fact(a - 1);
  } else return 1;
};
console.log(fact(int));
