// MATH FUNCTIONS MASSALALARI :
// // 1 MISOL
// console.log(Math.random() * 100);
// iki xil ususli:
// console.log(Math.trunc(Math.random() * 100));

// 2 misol
// let num = +prompt(`sonni kiritng:`);
// if (num < 0) {
//     console.log("musbat son kiriting !!");
// } else {
//     console.log("yaxshi");
// }

// 3 misol
// let num1 = +prompt(`sonni kiritng :`);
// let num2 = +prompt(`sonni kiritng :`);
// let num3 = +prompt(`sonni kiritng :`);
// let num4 = +prompt(`sonni kiritng :`);
// let num5 = +prompt(`sonni kiritng :`);

// let max = Math.max(num1, num2, num3, num4, num5);
// let min = Math.min(num1, num2, num3, num4, num5);
// console.log("eng kata son : " + max);
// console.log("eng kichkina son : " + min);

// 4 misol
// let num = +prompt(`sonni kiritng :`);
// let up = Math.ceil(num);
// let down = Math.floor(num);

// console.log("tepaga yaxlitlangan son : " + up);
// console.log("pastga yaxlitlangan son : " + down);

// 5 misol
// let radius = +prompt(`radiusni kiriting:`);

// let C = 2 * Math.PI * radius;
// console.log("Aylananing uzunligi : " + C.toFixed(0));

// TERNARY OPERATORI MISOLLARI:
// 1 misol
// let num = +prompt(`Sonni kiriting:`);
// num > 0 ? console.log("musbat son") : console.log("manfiy son");

// 2 misol
// let age = +prompt(`Yoshingizni kiritng : `);
//  age >= 18
//      ? console.log("Ruxsat berilgan !")
//     : console.log("Ruxsat etilmagan !");

// 3 misol
// let num = +prompt(`Sonni kiritng : `);
// num % 2 == 0 ? console.log("musbat son !") : console.log("manfiy son !");

// FOR SIKLGA OID MASSALLALAR : !!!
// 1. Juft va toq sonlarni aniqlash
// for (let num = 1; num <= 20; num++) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// }

// 2. Faqat musbat sonlarni qo'shish
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let userNumber = +prompt(`${i}-sonni kiriting!`);
//   if (userNumber > 0) {
//     sum = sum + userNumber;
//   }
// }
// console.log("Yig'indisi--> " + sum);
// alert("Yig'indisi--> " + sum);

// 3. Belgilangan oraliqdagi sonlarni chop etish
// for (let j = 30; j <= 50; j++) {
//   console.log(j);
// }


// 4. Musbat yoki manfiy sonlarni sanash
// let counMax = 0;
// let counMin = 0;
// for (let num1 = 1; num1 <= 15; num1++) {
//   let userNumber = +prompt(`${num1} sonni kiriting`);
//   if (userNumber > 0) {
//     counMax++;
//   } else if (userNumber < 0) {
//     counMin++;
//   }
// }
// console.log(`Musbat sonlar yig'indisi--> ${counMax}`);
// alert(`Musbat sonlar yig'indisi--> ${counMax}`);
// console.log(`Manfiy sonlar yig'indisi--> ${counMin}`);
// alert(`Manfiy sonlar yig'indisi--> ${counMin}`);

// 6. Faqat toq sonlar yig'indisi
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log("To qsonlarning yig'indisi--> " + sum);
// alert("Toq sonlarning yig'indisi--> " + sum);

// 7. Foydalanuvchi yoshiga qarab xabar chiqaring
// for (let i = 1; i <= 5; i++) {
//   let userNumber = +prompt(`${i}-sonni kiriting`);
//   if (userNumber >= 18) {
//     console.log("Voyaga yetgan");
//     alert("Voyaga yetgan");
//   } else {
//     console.log("Voyaga yetmagan");
//     alert("Voyaga yetmagan");
//   }
// }

// 8. Juft sonlarni sanash
// let counter = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     counter++;
//   }
// }
// console.log("Jami kiritilgan juft son--> " + counter);

// 9. Berilgan sonlar orasida 5 va 10 o'rtasida bo'lganlarini sanash
// let counter = 0;
// for (let i = 1; i <= 10; i++) {
//   let userNumber = +prompt(i + "-sonini kiriting");
//   if (userNumber < 10 && userNumber > 5) {
//     counter++;
//   }
// }
// console.log(`${counter}-ta son 5 va 10 orasida yotipti`);
// alert(`${counter}-ta son 5 va 10 orasida yotipti`);

// 10. Sonlarning faqat musbat bo'lganlarini ko'rsating
// for (let i = 1; i <= 10; i++) {
//   let userNumber = +prompt(`${i}-sonini kiriting`);
//   if (userNumber % 2 != 0) {
//     console.log(userNumber);
//   }
// }

// 11. Berilgan sonlar orasida juft yoki manfiy bo'lganlarini sanash
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   let userNumber = +prompt(`${i}-sonini kiriting`);
//   if (userNumber < 0) {
//     sum++;
//   } else if (userNumber % 2 == 0) {
//     sum++;
//   }
// }
// console.log(sum);

// 12. 3 ga bo'linadigan sonlarni chop etish
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// 14. Berilgan raqamlar ichida faqat katta sonlarni ko'rsating
// for (let i = 1; i <= 10; i++) {
//   let userNumber = +prompt(i + "-sonini kiriting");
//   if (userNumber >= 50) {
//     console.log(userNumber);
//   }
// }

// 15. Foydalanuvchi tomonidan kiritilgan sonlar orasida 0 ni topish
// for (let i = 1; i <= 10; i++) {
//   let userNumber = +prompt(`${i}-sonini kiriting`);
//   if (userNumber == 0) {
//     console.log(userNumber);
//   }
// }
