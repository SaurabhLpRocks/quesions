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

    // We use this array to store count of sequence possible for each index
    // If lookupArray = [7, 1, 2, 3, 1, 2, 5, 8, 9, 6]
    // So for above lookupArray,
    // seqCountForIndx[5] = 2
    // seqCountForIndx[7] = 5
    // We initialize all seqCountForIndx items to 1 as for each item of lookupArray, at least sequence of length 1 is possible.
    let seqCountForIndx = Array(lookupArraySize).fill(1);
    let max = 0;

    // Initialize LIS values for all indexes
    // for (let i = 0; i < lookupArraySize; i++)
    //   lis[i] = 1;

    // Compute optimized LIS values in
    // bottom up manner
    for (let right = 1; right < lookupArraySize; right++) {
      for (let left = 0; left < right; left++) {
        // lookupArray[right] represents the item till which we want to calculate max sequence length possible
        // So increment count by 1 only when lookupArray[right] > lookupArray[left]
        // and (max sequence length + 1) for previous lookupArray[right-1] is greater than current sequence length for lookupArray[right]
        if (lookupArray[right] > lookupArray[left] && seqCountForIndx[right] < seqCountForIndx[left] + 1) {
          seqCountForIndx[right] = seqCountForIndx[left] + 1;
        }
      }
    }
    // Pick maximum of all LIS values
    for (let i = 0; i < lookupArraySize; i++)
      if (max < seqCountForIndx[i])
        max = seqCountForIndx[i];

    return max;
  }

}
