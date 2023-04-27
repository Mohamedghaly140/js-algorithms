function insertionSort(x = []) {
  let key = 0;

  for (let i = 1; i < x.length; i++) {
    key = x[i];

    let j = i - 1;

    for (j; j >= 0; j--) {
      if (x[j] > key) x[j + 1] = x[j];
      else break;
    }

    x[j + 1] = key;
  }

  return x;
}

const testArray = [9, 5, 1, 4, 2];

console.log(insertionSort(testArray));
