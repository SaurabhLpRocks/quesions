import { Injectable } from '@angular/core';

// An Anagram is a word, phrase or a name formed by rearranging the letters of another, such as cinema form iceman
// Ignore the casing

// validAnagram('', '') => true
// validAnagram('aaz', 'zaa') => true
// validAnagram('aaz', 'aza') => true
// validAnagram('cinema', 'iceman') => true
// validAnagram('try', 'cry') => false
// validAnagram('bee', 'bie') => false
// validAnagram('free', 'freee') => false

// Conditions:
// 1. Both string should be of the same length
// 2. Both strings should have exact same characters
// 3. Each character's frequency should match to other string's corresponding character

@Injectable({
  providedIn: 'root',
})
export class IsAnagramStringService {
  constructor() {}

  getCharFrequencyCounter(string1: string, string2: string) {
    let charCounter1: Record<string, number> = {};
    let charCounter2: Record<string, number> = {};
    for (let i = 0; i < string1.length; i++) {
      const char1 = string1[i].toLocaleLowerCase();
      const char2 = string2[i].toLocaleLowerCase();

      charCounter1[char1] = (charCounter1[char1] || 0) + 1;
      charCounter2[char2] = (charCounter2[char2] || 0) + 1;
    }
    return { charCounter1, charCounter2 };
  }

  // Create validAnagram method
  validAnagram(str1: string, str2: string) {
    // check if the length of the strings is same, if not return false
    if (str1.length !== str2.length) {
      return false;
    }
    const { charCounter1, charCounter2 } = this.getCharFrequencyCounter(
      str1,
      str2
    );
    const str1UniqueCharCount = Object.keys(charCounter1).length;
    const str2UniqueCharCount = Object.keys(charCounter2).length;

    if (str1UniqueCharCount !== str2UniqueCharCount) {
      return false;
    }
    // Loop on the first string's char frequency counter
    for (const char of str1) {
      // Check if the current char key is present in the second string frequency counter
      if (!charCounter2.hasOwnProperty(char)) {
        return false;
      }

      // Check if the frequency of the current char in current string is matching to the char in the second string frequency counter
      const str1CharFrequency = charCounter1[char];
      const str2CharFrequency = charCounter2[char];
      if (str1CharFrequency !== str2CharFrequency) {
        return false;
      }
    }
    return true;
  }
}
