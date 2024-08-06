# JS-Array-Sort-Benchmarking

The idea is to practically find out what sorting algorithm is used by JavaScript's built-in `Array.prototype.sort()` method by comparing its performance with other sorting algorithms on various of input.
The following sorting algorithms are implemented and used for benchmarking at the moment:

1. Insertion Sort
2. Quick sort
3. Quick sort with random pivot
4. Merge sort
5. Counting sort (since array elements are integers)

## How to run

```bash
npm run test
```

## Results

Based on the results on random and descending input, it seems that JavaScript's built-in `Array.prototype.sort()` method might be using Quick sort with additional optimizations on reverse sorted input
