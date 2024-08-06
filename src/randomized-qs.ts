import { swap, partition } from "./quick-sort";

function randomizedPartition(arr: number[], p: number, r: number) {
  const i = Math.floor(p + Math.random() * (r - p));
  swap(arr, i, r);
  return partition(arr, p, r);
}

function rqs(arr: number[], p: number, r: number) {
  if (p >= r) {
    return;
  }

  const q = randomizedPartition(arr, p, r);
  rqs(arr, p, q - 1);
  rqs(arr, q + 1, r);
}

export default function randomizedQuickSort(arr: number[]) {
  rqs(arr, 0, arr.length - 1);
}
