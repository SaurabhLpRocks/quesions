import { Injectable } from '@angular/core';

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

@Injectable({
  providedIn: 'root',
})
export class SameFrequencyService {
  constructor() {}

  convertNumberToIntArray(numberToConvert: number): number[] {
    // Create a while loop till last digit is reached
    const brokenDigits: number[] = [];
    let lastDigitNotReached = true;
    let remainingNumber = numberToConvert;
    while (lastDigitNotReached) {
      // Do mod 10 of the number to get the last digit of the number
      const rightMostDigit = remainingNumber % 10;
      brokenDigits.push(rightMostDigit);
      // Divide number by 10 and do Math.floor to get the remaining number after removing the rightmost digit
      remainingNumber = Math.floor(remainingNumber / 10);
      // If answer of the division is 0, then break the loop else continue
      if (remainingNumber === 0) {
        lastDigitNotReached = false;
      }
    }
    return brokenDigits;
  }

  getFrequencyCounters(digits1: number[], digits2: number[]) {
    const frequencyCounter1: Record<string, number> = {};
    const frequencyCounter2: Record<string, number> = {};
    for (let i = 0; i < digits1.length; i++) {
      frequencyCounter1[digits1[i]] = (frequencyCounter1[digits1[i]] || 0) + 1;
      frequencyCounter2[digits2[i]] = (frequencyCounter2[digits2[i]] || 0) + 1;
    }
    return { frequencyCounter1, frequencyCounter2 };
  }

  sameFrequency(lookupNumber1: number, lookupNumber2: number) {
    // First convert both numbers in two integer array
    const brokenDigitsForNumber1 = this.convertNumberToIntArray(lookupNumber1);
    const brokenDigitsForNumber2 = this.convertNumberToIntArray(lookupNumber2);

    // Check count of digits in both the arrays
    // If the digit count of both the arrays is not same, then return false
    if (brokenDigitsForNumber1.length !== brokenDigitsForNumber2.length) {
      return false;
    }

    // Create two object which holds frequency of each digit of each number
    const { frequencyCounter1, frequencyCounter2 } = this.getFrequencyCounters(
      brokenDigitsForNumber1,
      brokenDigitsForNumber2
    );

    // Now loop through each key of first number counter object and check following conditions
    for (const key in frequencyCounter1) {
      // Key is not present in 2nd counter object
      if (!frequencyCounter2.hasOwnProperty(key)) {
        return false;
      }
      const frequency1 = frequencyCounter1[key];
      const frequency2 = frequencyCounter2[key];
      // Value of key in both objects is not same
      if (frequency1 !== frequency2) {
        return false;
      }
    }
    return true;
  }
}
