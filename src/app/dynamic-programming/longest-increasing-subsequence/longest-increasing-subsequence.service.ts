import { Injectable } from '@angular/core';

/**
 * Longest Incremental Subsequence (LIS)
 * Given an unsorted array, find the max length of subsequence in which the numbers are in incremental order.
 * For example:
 * input [7, 1, 2, 3, 1, 2, 5, 8, 9, 6], then LIS is [1, 2, 3, 5, 8, 9] and output is 6.
 * input [10, 22, 9, 33, 21, 50, 41, 60, 80] then LIS [10, 22, 33, 50, 60, 80] and output is 6.
 * input [10, 9, 8] then LIS [10] and output is 1.
 * input [10] then LIS [10] and output is 1.
 * input [] then LIS [0] and output is 0.
 */

@Injectable({
  providedIn: 'root'
})
export class LongestIncreasingSubsequenceService {

  constructor() { }

  // [7, 1, 2, 3, 1, 2, 5, 8, 9, 6]
  longestIncreasingSubsequence(lookupArray: number[]) {
    const lookupArraySize = lookupArray.length;

    let lis = Array(lookupArraySize).fill(0);
    let max = 0;

    // Initialize LIS values for all indexes
    for (let i = 0; i < lookupArraySize; i++)
      lis[i] = 1;

    // Compute optimized LIS values in
    // bottom up manner
    for (let right = 1; right < lookupArraySize; right++) {
      for (let left = 0; left < right; left++) {
        if (lookupArray[right] > lookupArray[left] && lis[right] < lis[left] + 1) {
          lis[right] = lis[left] + 1;
        }
      }
    }
    // Pick maximum of all LIS values
    for (let i = 0; i < lookupArraySize; i++)
      if (max < lis[i])
        max = lis[i];

    return max;
  }

}
