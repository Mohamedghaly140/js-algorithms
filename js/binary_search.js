function binarySearch(x = [], key) {
  let low = 0;
  let high = x.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (key === x[mid]) {
      return mid;
    } else {
      if (key > x[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(testArray, 4));
