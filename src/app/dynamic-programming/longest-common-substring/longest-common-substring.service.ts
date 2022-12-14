import { Injectable } from '@angular/core';
/**
 * Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
 * Input : X = “GeeksForGeeks”, y = “GeeksQuiz”
 * Output : 5
 * Explanation:
 * The longest common substring is “Geeks” and is of length 5.
 *
 * Input : X = “abcdxyz”, y = “xyzabcd”
 * Output : 4
 * Explanation:
 * The longest common substring is “abcd” and is of length 4.
 */
@Injectable({
  providedIn: 'root'
})
export class LongestCommonSubstringService {

  constructor() { }

  // JavaScript implementation of
  // finding length of longest
  // Common substring using
  // Dynamic Programming

  /*
   Returns length of longest common
   substring of X[0..m-1] and Y[0..n-1]
   */
  lCSubStr(str1: string, str2: string, len1: number, len2: number) {
    // Create a table to store
    // lengths of longest common
    // suffixes of substrings.
    // Note that LCSuff[i][j]
    // contains length of longest
    // common suffix of
    // X[0..i-1] and Y[0..j-1].
    // The first row and first
    // column entries have no
    // logical meaning, they are
    // used only for simplicity of program

    var LCStuff =
      Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));

    // To store length of the longest
    // common substring

    // var result = 0;
    var result = '';

    // Following steps build
    // LCSuff[m+1][n+1] in bottom up fashion
    for (let x = 0; x <= len1; x++) {
      for (let y = 0; y <= len2; y++) {
        if (x === 0 || y === 0)
          LCStuff[x][y] = 0;
        else if (str1[x - 1] == str2[y - 1]) {
          // LCStuff[x][y] = LCStuff[x - 1][y - 1] + 1;
          const prev = LCStuff[x - 1][y - 1] === 0 ? '' : LCStuff[x - 1][y - 1];
          LCStuff[x][y] = prev + str1[x - 1];
          // result = Math.max(result, LCStuff[x][y]);
          result = LCStuff[x][y].length > result.length ? LCStuff[x][y] : result;
        } else
          LCStuff[x][y] = 0;
      }
    }
    return result;
  }

  getLongestCommonSubstring(str1: string, str2: string) {
    const m = str1.length;
    const n = str2.length;

    return this.lCSubStr(str1, str2, m, n);
  }

}


