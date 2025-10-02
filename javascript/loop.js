// loop 
// Loop ka kaam hota hai code ko repeat karna jab tak ek condition true ho.
// Isse hume same code bar-bar likhne ki zaroorat nahi padti


                        // 1. for loop
// Jab hume pehle se pata ho kitni baar code repeat karna hai

// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }
// Output: 1,2,3,4,5

                      // 2. while loop
// Jab hume sirf condition ke base par loop chalana ho

// let i = 1;
// while (i <= 5) {
//   console.log("Count:", i);
//   i++;
// }

                     //3. do...while loop
// Ye loop pehle ek baar run hota hai, phir condition check hoti hai,
// Matlab condition false ho tab bhi kam se kam ek baar execute hoga

// let i = 1;
// do {
//   console.log("Value:", i);
//   i++;
// } while (i <= 5);

                        //4. for...in loop
// Objects ke properties (keys) iterate karne ke liye 

// let person = { name: "Sobia", age: 22, city: "Lahore" };
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }
// Output: name:Sobia, age:22, city:Lahore

                 // 5. for...of loop
// Arrays ya strings ke values iterate karne ke liye 

// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }
// Output: red, green, blue
