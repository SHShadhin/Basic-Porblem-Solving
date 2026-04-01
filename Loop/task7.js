/**
 *  7. Factorial বের করো
👉 Input: 5
 👉 Output: 120
 (5! = 5×4×3×2×1)
*/
let n = 5
let factorial = 1;
for (i = 5; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(factorial)