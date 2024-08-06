import randomizedQuickSort from "../randomized-qs";

test("quick-sort", () => {
  const arr = [13, 19, 9, 0, 5, 12, 8, 7, 4, 21, 2, 6, 11];

  randomizedQuickSort(arr);
  expect(arr).toEqual([0, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 19, 21]);
});
