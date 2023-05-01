const testArray = [-6, -5, 12, 10, -9, -1];

function segregate(arr = []) {
  const negative = [];
  const positive = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  return [...negative, ...positive];
}

console.log(testArray);
console.log(segregate(testArray));
