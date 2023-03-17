// calculate correlation coefficient
const x = [1, 2, 3, 4, 5, 6];
const y = [2, 4, 7, 9, 12, 14];

function correlationCoefficient(x = [], y = [], n = 0) {
  const sumX = x.reduce((prev, cur) => prev + cur, 0);
  const sumY = y.reduce((prev, cur) => prev + cur, 0);

  let sumXY = 0;
  for (let i = 0; i < n; i++) sumXY += x[i] * y[i];

  const sumX2 = x.map(v => Math.pow(v, 2)).reduce((prev, cur) => prev + cur, 0);
  const sumY2 = y.map(v => Math.pow(v, 2)).reduce((prev, cur) => prev + cur, 0);

  const sqrtX = Math.sqrt(n * sumX2 - Math.pow(sumX, 2));
  const sqrtY = Math.sqrt(n * sumY2 - Math.pow(sumY, 2));

  const a = n * sumXY;
  const b = sumX * sumY;

  const r = (a - b) / (sqrtX * sqrtY);
  return r;
}

console.log(correlationCoefficient(x, y, x.length));
