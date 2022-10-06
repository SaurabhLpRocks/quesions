import { Injectable } from '@angular/core';
/**
 * split the string
 * run a loop till string.length-1
 * push char if it is either of - {[(
 * pop char if it is either of - }]) only when same char is found in stack
 * if diff char is found return false
 * return true if all the brackets pushed are popped
 */
@Injectable({
  providedIn: 'root'
})
export class BalancedBracketsService {

  constructor() { }

  areBracketsBalanced(expr: string) {
    // Using Array is faster
    // than using Stack class
    let stack = [];

    // Traversing the Expression
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];

      if (x == '(' || x == '[' || x == '{') {

        // Push the element in the stack
        stack.push(x);
        continue;
      }

      let check;
      switch (x) {
        case ')':
          check = stack.pop();
          if (check == '{' || check == '[')
            return false;
          break;

        case '}':
          check = stack.pop();
          if (check == '(' || check == '[')
            return false;
          break;

        case ']':
          check = stack.pop();
          if (check == '(' || check == '{')
            return false;
          break;
      }
    }

    // Check Empty Stack
    return (stack.length == 0);
  }
}
