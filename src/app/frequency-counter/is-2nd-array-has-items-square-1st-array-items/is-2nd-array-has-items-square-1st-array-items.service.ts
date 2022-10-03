import { Injectable } from '@angular/core';

// Find if each item of the first array has corresponding squared item in the second array regardless of the order of items in the second array
// [1,4,3] & [16,1,9] = true
// [1,5,3,5] & [25,9,25,1] = true
// [1,4,3] & [1,16,9] = true
// [1,4,3] & [16,1,9, 25] = false
// [1,4,3] & [16,1,] = false
// [] & []  = false
// null & null  = false
// null & []  = false
// [] & null  = false
@Injectable({
  providedIn: 'root',
})
export class Is2ndArrayHasItemsSquare1stArrayItemsService {
  constructor() { }

  // First create two objects
  // First object holds frequency of the items in first array
  // Second object holds frequency of the items in the second array
  getFrequencyCounters(arr1: number[], arr2: number[]) {
    let frequencyCounter1: Record<number, number> = {};
    let frequencyCounter2: Record<number, number> = {};
    for (let i = 0; i < arr1.length; i++) {
      let array1Item = arr1[i];
      let array2Item = arr2[i];
      frequencyCounter1[array1Item] = (frequencyCounter1[array1Item] || 0) + 1;
      frequencyCounter2[array2Item] = (frequencyCounter2[array2Item] || 0) + 1;
    }
    return { frequencyCounter1, frequencyCounter2 };
  }

  arrayHasAllSquaredItems(arr1: number[], arr2: number[]) {
    // Both arrays are of same length
    if (arr1.length !== arr2.length) {
      return false;
    }

    const { frequencyCounter1, frequencyCounter2 } = this.getFrequencyCounters(
      arr1,
      arr2
    );

    // Iterate over the each key of the first object
    for (let key in frequencyCounter1) {
      let squareOfArr1Item = parseInt(key) ** 2;

      // Verify 2 conditions
      // 1. 2nd object has square of the current key
      if (!frequencyCounter2.hasOwnProperty(squareOfArr1Item.toString())) {
        return false;
      }

      // 2. Frequency of current key and second object key is same.
      if (frequencyCounter1[key] !== frequencyCounter2[squareOfArr1Item]) {
        return false;
      }

      return true;
    }
    return false;
  }
}
