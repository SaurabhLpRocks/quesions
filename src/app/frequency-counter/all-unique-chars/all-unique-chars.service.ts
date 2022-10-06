import { Injectable } from '@angular/core';

/**
 * Find out if a string has all unique characters
 * abc => true
 * aba => false
 * aaa => false
 * a   => true
 * ''  => true
 * null=> true
 * ' ' => true
 * 'a '=> true
 */
@Injectable({
  providedIn: 'root'
})
export class AllUniqueCharsService {

  constructor() { }

  createFrequencyCounters(str: string): Record<string, number> {
    let counter: Record<string, number> = {};
    for (const item of str) {
      counter[item] = (counter[item] || 0) + 1;
    }
    return counter;
  }

  areAllUniqueChars(lookupString: string) {
    const counter = this.createFrequencyCounters(lookupString);
    for (const item of lookupString) {
      if (counter[item] >1) {
        return false;
      }
    }
    return true;
  }
}
