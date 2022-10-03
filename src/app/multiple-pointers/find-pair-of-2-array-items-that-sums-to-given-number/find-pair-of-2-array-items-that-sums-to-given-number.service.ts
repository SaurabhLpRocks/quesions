import { Injectable } from '@angular/core';

// Write a function called SumZero which accepts a sorted array of integers.
// The function should find a first pair where the sum is 0.
// Return an array which includes both values that sum to 0 or undefined if pair does not exist.

// Can the array have repeated numbers?
// Examples:
// SumZero([-1,0,1]) // [-1,1]
// SumZero([0,0,1]) // [0,0]
// SumZero([-5,-3,0,5]) // [-5,5]
// SumZero([-8,-5,-3,0,5]) // [-5,5]
// SumZero([-8,-5,-3,0,1,5,6]) // [-5,5]
// SumZero([-8,-5,-3,0,1,5,8,9]) // [-8,8]
// SumZero([-9,-7,-6,-5,-3,0,1,2,5,6,8,10]) // [-6,6]
// SumZero([-2,0,5]) // undefined
// SumZero([1,2,3]) // undefined

@Injectable({
  providedIn: 'root',
})
export class FindPairOf2ArrayItemsThatSumsToGivenNumberService {
  constructor() {}

  sumZero(lookupArray: number[]): number[] | undefined {
    // Initialize loop i=0 & j=array.length-1
    let i = 0;
    let j = lookupArray.length - 1;

    while (i !== j) {
      // Break the loop if i==j and return undefined
      if (i === j) {
        return undefined;
      }
      // Set i to left and j to right
      let left = lookupArray[i];
      let right = lookupArray[j];
      const sum = left + right;

      // Zero sum found return first match pair
      if (sum === 0) {
        return [left, right];
      }

      // If sum<0 move i to right
      else if (sum < 0) {
        i++;
      }

      // If sum>0 move j to left
      else {
        j--;
      }
    }

    return undefined;
  }
}
