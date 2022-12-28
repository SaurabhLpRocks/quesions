import { Injectable } from '@angular/core';

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
 * For "bbbbb" the longest substring is "b", with the length of 1.
 */

@Injectable({
  providedIn: 'root'
})
export class LongestSubStringService {

  constructor() { }

  longestSubStringLength(lookupString: string) {
    let i = 0;
    let longestSubStringLength = 1;
    let charsTracker: Record<string, number> = {}
    charsTracker[lookupString[i]] = -1;

    for (let j = 0; j < lookupString.length; j++) {
      const currentChar = lookupString[j];
      let currentCharLastFoundAtIndex = charsTracker[currentChar] ?? -1;
      i = Math.max(i, currentCharLastFoundAtIndex + 1);
      longestSubStringLength = Math.max(longestSubStringLength, j - i + 1);

      charsTracker[currentChar] = j;
    }

    return longestSubStringLength;
  }
}
