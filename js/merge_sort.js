function mergeSort(array = [], start = 0, end = 0) {
  if (end <= start) return;

  const midPoint = Math.floor((end + start) / 2);

  mergeSort(array, start, midPoint);
  mergeSort(array, midPoint + 1, end);
  merge(array, start, midPoint, end);
}

function merge(array = [], start = 0, midPoint = 0, end = 0) {
  let i, j, k;

  const leftLength = midPoint - start + 1;
  const rightLength = end - midPoint;

  const leftArray = new Array(leftLength).fill(0);
  const rightArray = new Array(rightLength).fill(0);

  for (i = 0; i < leftLength; i++) {
    leftArray[i] = array[start + i];
  }
  for (j = 0; j < rightLength; j++) {
    rightArray[j] = array[midPoint + 1 + j];
  }

  i = j = 0;
  k = start;

  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

const testArray = [9, 5, 1, 4, 2];

console.log(testArray);

mergeSort(testArray, 0, testArray.length - 1);

console.log(testArray);
