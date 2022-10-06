import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseStringCharsExceptSpecialCharsService {

  constructor() { }
  reverseString(inputStr: string): string {
    const reversed = '';
    let i = 0;
    let j = inputStr.length - 1;
    let strItems = inputStr.split('');
    const regex = /^[a-zA-Z]+$/;
    while (i !== j && i < j) {
      if (regex.test(strItems[i]) && regex.test(strItems[j])) {
        strItems[i] = strItems[i] + strItems[j];
        strItems[j] = strItems[i][0];
        strItems[i] = strItems[i][1];
        i++;
        j--;
      } else if (!regex.test(strItems[i]) && !regex.test(strItems[j])) {
        i++;
        j--;
      } else if (!regex.test(strItems[i]) && regex.test(strItems[j])) {
        i++;
      } else if (regex.test(strItems[i]) && !regex.test(strItems[j])) {
        j--;
      }
    }
    return strItems.join('');
  }
}
