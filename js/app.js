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

// ========================================================================

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

// ========================================================================

// function area(r) {
//   const a = Math.PI * Math.pow(r, 2);
//   return a.toFixed(2);
// }

// console.log(area(10));
// console.log(area(20));

// ========================================================================

// Area of Parallelogram
// A = b * h
// function areaOfParallelogram(b, h) {
//   const area = b * h;
//   // const area = Math.pow(a, 2) * Math.sin(d);
//   return area;
// }
// console.log(areaOfParallelogram(5, 3));

// ========================================================================

// Area of Trapezoid
// A = (a + b / 2) * h
// function areaOfTrapezoid(a, b, h) {
//   const area = ((a + b) / 2) * h;
//   return area;
// }
// console.log(areaOfTrapezoid(2, 5, 3));

// ========================================================================

// calculate correlation
// const x = [1, 2, 3, 4, 5, 6];
// const y = [2, 4, 7, 9, 12, 14];

// function correlation(x = [], y = [], n = 0) {
//   const sumX = x.reduce((prev, cur) => prev + cur, 0);
//   const sumY = y.reduce((prev, cur) => prev + cur, 0);

//   let sumXY = 0;
//   for (let i = 0; i < n; i++) sumXY += x[i] * y[i];

//   const sumX2 = x.map(v => Math.pow(v, 2)).reduce((prev, cur) => prev + cur, 0);
//   const sumY2 = y.map(v => Math.pow(v, 2)).reduce((prev, cur) => prev + cur, 0);

//   const sqrtX = Math.sqrt(n * sumX2 - Math.pow(sumX, 2));
//   const sqrtY = Math.sqrt(n * sumY2 - Math.pow(sumY, 2));

//   const a = n * sumXY;
//   const b = sumX * sumY;

//   const r = (a - b) / (sqrtX * sqrtY);
//   return r;
// }

// console.log(correlation(x, y, x.length));

// ========================================================================
