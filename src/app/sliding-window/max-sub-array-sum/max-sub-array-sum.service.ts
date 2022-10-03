import { Injectable } from '@angular/core';

/***
 *
    Write a function called maxSubarraySum which accepts an array of integers and a number called n.
    The function should calculate the maximum sum of n consecutive elements in the array.

    maxSubarraySum([1,2,5,2,8,1,5],2) ==> 10
    maxSubarraySum([1,2,5,2,8,1,5],4) ==> 17
    maxSubarraySum([4,2,1,6], 1) ==> 6
    maxSubarraySum([4,2,1,6,2], 4) ==> 13
    maxSubarraySum([15], 1) ==> null
    maxSubarraySum([15], 3) ==> null
    maxSubarraySum([], 4) ==> null
 */

@Injectable({
  providedIn: 'root',
})
export class MaxSubArraySumService {
  constructor() { }

  // Time complexity O(N)
  maxSubarraySum(
    lookupArray: number[],
    numberOfItemsToAdd: number
  ): number | null {
    // Total array items should be greater than or equal to the numberOfItemsToAdd.
    // If not then return null
    if (lookupArray === null || lookupArray.length < numberOfItemsToAdd) {
      return null;
    }

    // Declare vars maxSum and tempSum.
    let maxSum = 0;
    let tempMax = 0;

    // First loop through lookupArray for first window (numberOfItemsToAdd) and calculate the sum.
    for (let index = 0; index < numberOfItemsToAdd; index++) {
      // Store the sum in maxSum variable.
      maxSum += lookupArray[index];
    }

    // Set tempMax to maxSum
    tempMax = maxSum;
    // Start new loop from i= numberOfItemsToAdd till i< lookupArray.length
    for (let i = numberOfItemsToAdd; i < lookupArray.length; i++) {
      // Now from tempMax subtract previous window's first item i.e. [i-numberOfItemsToAdd] item and add current window last item i.e. i,
      // and store the number in temp sum.
      tempMax = tempMax - lookupArray[i - numberOfItemsToAdd] + lookupArray[i];

      // Now calculate the max from maxSum and tempMax and store it in the maxSum.
      maxSum = Math.max(maxSum, tempMax);
    }

    return maxSum;
  }
}
