function swap(arr: number[], x: number, y: number) {
  const tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
}

function partition(arr: number[], p: number, r: number): number {
  const pivot = arr[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, r);
  return i;
}

function qs(arr: number[], p: number, r: number) {
  if (p >= r) {
    return;
  }

  const q = partition(arr, p, r);
  qs(arr, p, q - 1);
  qs(arr, q + 1, r);
}

export default function quickSort(arr: number[]) {
  qs(arr, 0, arr.length - 1);
}
