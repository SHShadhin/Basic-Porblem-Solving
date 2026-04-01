/**
 *  5. Grade System
👉 Task:
marks দিয়ে grade বের করো
👉 Rules:
80+ → A+
70–79 → A
60–69 → B
নিচে → Fail
*/


let marks = 40;

if (marks >= 80) {
  console.log('A+');
} else if (marks >= 70 && marks < 80) {
  console.log('A');
} else if (marks >= 60 && marks < 70) {
  console.log('B');
} else if (marks >= 50 && marks < 60) {
  console.log('C');
} else if (marks >= 40 && marks < 50) {
  console.log('D');
} else {
  console.log('F');
}