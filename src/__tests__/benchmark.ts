import quickSort from "../quick-sort";
import insertionSort from "../insertion-sort";
import mergeSort from "../merge-sort";
import countingSort from "../counting-sort";
import randomizedQuickSort from "../randomized-qs";

function time(fn: () => void) {
  const before = Date.now();
  fn();
  return Date.now() - before;
}

function randomArrayGenerator(size: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
}

function reversedArrayGenerator(size: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(size - i);
  }
  return arr;
}

describe("pseudo random array sort benchmarking", () => {
  let sampleArray: number[] = [];
  beforeAll(() => {
    sampleArray = randomArrayGenerator(100_000);
  });

  test("1000 numbers", () => {
    const n = 1000;

    console.log(
      "##########################",
      "\n",
      `${n} - pseudo random array`
    );
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });

  test("10_000 numbers", () => {
    const n = 10_000;

    console.log(
      "##########################",
      "\n",
      `${n} - pseudo random array`
    );
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });

  test("100_000 numbers", () => {
    const n = 100_000;

    console.log(
      "##########################",
      "\n",
      `${n} - pseudo random array`
    );
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });
});

describe("reversed array sort benchmarking", () => {
  let sampleArray: number[] = [];
  beforeAll(() => {
    sampleArray = reversedArrayGenerator(100_000);
  });

  test("1000 numbers", () => {
    const n = 1000;

    console.log("##########################", "\n", `${n} - reversed array`);
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });

  test("10_000 numbers", () => {
    const n = 10_000;

    console.log("##########################", "\n", `${n} - reversed array`);
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });

  test("50_000 numbers", () => {
    const n = 50_000;

    console.log("##########################", "\n", `${n} - reversed array`);
    console.log(
      `arr.sort: `,
      time(() => sampleArray.slice(0, n).sort((a, b) => a - b))
    );
    console.log(
      `quick-sort: `,
      time(() => quickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `randomized-quick-sort: `,
      time(() => randomizedQuickSort(sampleArray.slice(0, n)))
    );
    console.log(
      `insertion-sort: `,
      time(() => insertionSort(sampleArray.slice(0, n)))
    );
    console.log(
      `merge-sort: `,
      time(() => mergeSort(sampleArray.slice(0, n)))
    );
    console.log(
      `counting-sort: `,
      time(() => countingSort(sampleArray.slice(0, n)))
    );
  });
});
