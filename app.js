// function fact(number) {
//   let result = 1;
//   for (let i = 2; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

// function fact(number) {
//   if (number <= 1) {
//     return 1;
//   }
//   return number * fact(number - 1);
// }

// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));

// function fib(n, memo) {
//   // [1, 1, 2, 3, 5, 8]
//   let result;
//   if (memo[n]) {
//     return memo[n];
//   }
//   if (n === 0 || n === 1) {
//     result = 1;
//   } else {
//     result = fib(n - 1, memo) + fib(n - 2, memo);
//   }
//   memo[n] = result;
//   return result;
// }

// console.log(fib(3, {}));
// console.log(fib(4, {}));
// console.log(fib(59, {}));

// function area(r) {
//   const a = Math.PI * Math.pow(r, 2);
//   return a.toFixed(2);
// }

// console.log(area(10));
// console.log(area(20));

function areaOfParallelogram(b, h) {
  const area = b * h;
  // const area = Math.pow(a, 2) * Math.sin(d);
  return area;
}
console.log(areaOfParallelogram(5, 3));

function areaOfTrapezoid() {}
