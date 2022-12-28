import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalancedArrayService {

  constructor() { }

  balancedArray(arr: number[]) {
    // Write your code here
    // take 3 pointers 1 to travers left nums one to point pivot one to traverse right nums

    let pivotIndexFound = -1;

    // start outer loop for pivot which starts at 1 and ends at arr.len-2
    for (let pivotIndex = 1; pivotIndex <= arr.length - 2; pivotIndex++) {
      let leftSum = 0;
      let rightSum = 0;
      // now start 1st inside loop for left items addition till pivot-1 index
      for (let leftIndex = 0; leftIndex < pivotIndex; leftIndex++) {
        // store the left addition
        leftSum += arr[leftIndex];
      }

      // now start another loop for right items
      for (let rightIndex = pivotIndex + 1; rightIndex < arr.length; rightIndex++) {
        if (arr[rightIndex] > leftSum) {
          // if any of the number is greater than left additon then break the loop and move to nex pivot
          break;
        }
        rightSum += arr[rightIndex];
      }
      if (leftSum === rightSum) {
        pivotIndexFound = pivotIndex;
      }
    }

    return pivotIndexFound;
  }
}
