/**
 * 6. Leap Year Check
👉 Task:
একটি year নাও
check করো leap year কিনা
👉 Rules:
divisible by 4
divisible by 100 না হলে OR divisible by 400 হলে
*/

let year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log('Leap Year')
} else {
  console.log('Not Leap Year')
}