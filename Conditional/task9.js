/**
 * 🧠 9. Discount System
👉 Task:
price এর উপর discount calculate করো
👉 Rules:
1000+ → 20% discount
500+ → 10% discount
এর নিচে → No discount
*/

let price = 500;
if (price >= 1000) {
  const discountPrice = (price * (20 / 100))
  const finalPrice = price - discountPrice;
  console.log(finalPrice)
} else if (price >= 500) {
  const discountPrice = price * (10 / 100);
  const finalPrice = price - discountPrice;
  console.log(finalPrice);
} else {
  console.log(price)
}