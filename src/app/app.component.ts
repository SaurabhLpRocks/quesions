import { Component } from '@angular/core';
import {
  Is2ndArrayHasItemsSquare1stArrayItemsService,
  IsAnagramStringService,
  SameFrequencyService,
} from './frequency-counter';
import {
  CountUniqueArrayItemsService,
  FindPairOf2ArrayItemsThatSumsToGivenNumberService,
  ReverseStringCharsExceptSpecialCharsService,
} from './multiple-pointers';
import { MaxSubArraySumService } from './sliding-window';
import { LongestIncreasingSubsequenceService } from './dynamic-programming/longest-increasing-subsequence';
import { BalancedArrayService, LongestCommonSubstringService, LongestPalindromeSubstringService } from './dynamic-programming';
import { LongestSubStringService } from './sliding-window/longest-sub-string';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'questions';
  /**
   *
   */
  constructor(
    private _is2ndArrayHasItemsSquare1stArrayItemsService: Is2ndArrayHasItemsSquare1stArrayItemsService,
    private _isAnagramStringService: IsAnagramStringService,
    private _findPairOf2ArrayItemsThatSumsToGivenNumberService: FindPairOf2ArrayItemsThatSumsToGivenNumberService,
    private _countUniqueArrayItemsService: CountUniqueArrayItemsService,
    private _maxSubArraySumService: MaxSubArraySumService,
    private _sameFrequencyService: SameFrequencyService,
    private _longestIncreasingSubsequenceService: LongestIncreasingSubsequenceService,
    private _longestCommonSubstringService: LongestCommonSubstringService,
    private _longestSubStringService: LongestSubStringService,
    private _reverseStringCharsExceptSpecialCharsService: ReverseStringCharsExceptSpecialCharsService,
    private _longestPalindromeSubstringService: LongestPalindromeSubstringService,
    private _balancedArrayService: BalancedArrayService,
  ) {
    const result = this.balancedArray();
    console.log(
      '🚀 ~ file: app.component.ts ~ line 24 ~ AppComponent ~ result',
      result
    );
  }

  is2ndArrayHasItemsSquare1stArrayItemsService() {
    return this._is2ndArrayHasItemsSquare1stArrayItemsService.arrayHasAllSquaredItems(
      [1, 4, 3],
      [16, 1, 9]
    );
  }

  isAnagramStringService() {
    return this._isAnagramStringService.validAnagram('', '');
  }

  findPairOf2ArrayItemsThatSumsToGivenNumberService() {
    return this._findPairOf2ArrayItemsThatSumsToGivenNumberService.sumZero([
      -9, -7, -6, -5, -3, 0, 1, 2, 5, 6, 8, 10,
    ]);
  }

  countUniqueArrayItems() {
    const countUniqueArrayItemsWithExtraCounter =
      this._countUniqueArrayItemsService.countUniqueArrayItemsWithExtraCounter(
        [-1, -1, 0, 2, 2]
      );
    const counterUniqueArrayItemsWithoutExtraCounter =
      this._countUniqueArrayItemsService.counterUniqueArrayItemsWithoutExtraCounter(
        [-1, -1, 0, 2, 2]
      );
    return [
      countUniqueArrayItemsWithExtraCounter,
      counterUniqueArrayItemsWithoutExtraCounter,
    ];
  }

  maxSubarraySum() {
    return this._maxSubArraySumService.maxSubarraySum([19, 5, 17, 19], 3);
  }

  sameFrequency() {
    return this._sameFrequencyService.sameFrequency(22, 222);
  }

  longestIncreasingSubsequence() {
    return this._longestIncreasingSubsequenceService.longestIncreasingSubsequence([7, 1, 2, 3, 2, 2, 5, 8, 9, 6])
  }

  longestCommonSubstring() {
    var X = "xyz";
    var Y = "yzx";
    return this._longestCommonSubstringService.getLongestCommonSubstring(X, Y);
  }

  longestSubStringService() {
    return this._longestSubStringService.longestSubStringLength('babb');
  }

  reverseStringCharsExceptSpecialCharsService() {
    return this._reverseStringCharsExceptSpecialCharsService.reverseString('Ab,c,de!$');
  }

  longestPalindromeSubstring() {
    return this._longestPalindromeSubstringService.longestPalSubstr('21544511');
  }

  balancedArray() {
    return this._balancedArrayService.balancedArray([3, 1, 2, 1])
  }
}
