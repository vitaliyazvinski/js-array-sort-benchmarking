function merge(arr: number[], p: number, q: number, r: number) {
  const leftLength = q - p + 1;
  const rightLength = r - q;
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  for (let i = 0; i < leftLength; i++) {
    leftArr[i] = arr[p + i];
  }
  for (let j = 0; j < rightLength; j++) {
    rightArr[j] = arr[q + j + 1];
  }
  let i = 0;
  let j = 0;
  let k = p;

  while (i < leftLength && j < rightLength) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < leftLength) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightLength) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

function ms(arr: number[], p: number, r: number) {
  if (p >= r) {
    return;
  }
  const q = Math.floor((r + p) / 2);

  ms(arr, p, q);
  ms(arr, q + 1, r);
  merge(arr, p, q, r);
}

export default function mergeSort(arr: number[]) {
  ms(arr, 0, arr.length - 1);
}
