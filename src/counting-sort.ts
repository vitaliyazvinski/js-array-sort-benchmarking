function cs(arr: number[], n: number, k: number): number[] {
  const b = new Array(n);
  const c = new Array(k + 1).fill(0);

  for (let j = 0; j < n; j++) {
    c[arr[j]] = c[arr[j]] + 1;
  }

  for (let i = 1; i <= k; i++) {
    c[i] = c[i] + c[i - 1];
  }

  for (let j = n - 1; j >= 0; j--) {
    b[c[arr[j]] - 1] = arr[j];
    c[arr[j]] = c[arr[j]] - 1;
  }
  return b;
}

export default function countingSort(arr: number[]): number[] {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return cs(arr, arr.length, max);
}
