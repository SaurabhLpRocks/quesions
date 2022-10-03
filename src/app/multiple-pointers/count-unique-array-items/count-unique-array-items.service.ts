import { Injectable } from '@angular/core';

// Implement a function called countUniqueArrayItems, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted

// Examples:
// CountUniqueArrayItemsService([1,1,1]) // 1
// CountUniqueArrayItemsService([1,1,2]) // 2
// CountUniqueArrayItemsService([1]) // 1
// CountUniqueArrayItemsService([-1,-1,]) // 1
// CountUniqueArrayItemsService([-1,0,0]) // 2
// CountUniqueArrayItemsService([-1,0,2]) // 3
// CountUniqueArrayItemsService([0,0]) // 1
// CountUniqueArrayItemsService([-1,-1,0,2,2]) // 3
// CountUniqueArrayItemsService([-1,-1,-1,2,2]) // 3
// CountUniqueArrayItemsService([-1,0,0,2]) // 3
// CountUniqueArrayItemsService([-2,-1,0,1,5,5,6]) // 6
// CountUniqueArrayItemsService([-2,-1,0,5,5,5,6]) // 6
// CountUniqueArrayItemsService([-2,-1,0,1,5,5,5,6]) // 6
// CountUniqueArrayItemsService([]) // 0
// CountUniqueArrayItemsService([-2,-1]) // 2

// Ask question if we can modify the input lookupArray.
// If not, take counter array to solve
// else modify same array as counter
@Injectable({
  providedIn: 'root',
})
export class CountUniqueArrayItemsService {
  constructor() { }

  countUniqueArrayItemsWithExtraCounter(lookupArray: number[]): number {
    // if lookupArray has no items, then return 0
    if (lookupArray.length === 0) {
      return 0;
    }

    // if lookupArray has only one item, then return 1 as count
    if (lookupArray.length === 1) {
      return 1;
    }

    // Init unique counter to empty array
    let counter: number[] = [];

    // Init i=0; j=i+1
    let i = 0;
    let j = i + 1;
    // [1,2,3,4]
    // loop till i < lookupArray.length
    while (i < lookupArray.length) {
      // add left to counter array if left !== counter[counter.length-1]
      let counterLastItem = counter[counter.length - 1];
      const left = lookupArray[i];
      if (left !== counterLastItem) {
        counter.push(left);
      }
      i++;

      // add right to counter array if j < lookupArray.length and right !== counter[counter.length]
      if (j < lookupArray.length) {
        counterLastItem = counter[counter.length - 1];
        const right = lookupArray[j];
        if (right !== counterLastItem) {
          counter.push(right);
        }
        i++;
        j = i + 1;
      }
    }

    // after look completion, return counter length
    return counter.length;
  }

  counterUniqueArrayItemsWithoutExtraCounter(lookupArray: number[]): number {
    // if lookupArray has no items, then return 0
    if (lookupArray.length === 0) {
      return 0;
    }

    // if lookupArray has only one item, then return 1 as count
    if (lookupArray.length === 1) {
      return 1;
    }

    // Init i=0; j=1
    let i = 0;
    let j = 1;

    // loop un-till j < lookupArray.length
    while (j < lookupArray.length) {
      let left = lookupArray[i];
      let right = lookupArray[j];

      // if left !== right, do i++ and replace new left with current right and then do j++
      if (left !== right) {
        i++;
        lookupArray[i] = lookupArray[j];
        j++;
      }
      // if left === right, do j++
      else if (left === right) {
        j++;
      }
    }

    // finally return count as i+1
    return i + 1;
  }
}
