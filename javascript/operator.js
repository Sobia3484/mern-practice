// operator

                  // 1. arithmetic operator

// let a=5;
// let b=9;

// console.log("Additional operator:",a+b);
// console.log("Subtraction:",a-b);
// console.log("Multiplication",a*b);
// console.log("Division",a/b);
// console.log("Modulus (Reminder)",a%b);
// console.log("Exponentiation (Power)",a**b);


                      //2.Assignment operator


// let a = 10;      //simple asssign

//add and assign
// let x = 10;
// x+=5;
// console.log(x);

// //subtraction
// x-=3;
// console.log(x);

// //multiplication
// x*=9;
// console.log(x);

// //division
// x/=7;
// console.log(x);

// //modulus
// x%=8;
// console.log(x);

// //exponentional
// x**=5;
// console.log(x);

                      //3.compersion operator
//1.equal
// console.log(5=="5");

//2.strict equal (type must be same)

// console.log(5==="5");    //return false
// console.log(5===5);      //return true

//3.not equal
// console.log(5!=10);/

//4.strict not equal
// console.log(5!=="6");

//5.greater than
// console.log(5>6);

//6.less than 
// console.log(7<4);

//7.greater than or equal
// console.log(7>=4);

//8.less than or equal
// console.log(2<=5);

// convert string to number by using 
// let a = "763";
// let x = Number(a)
// console.log(typeof a);

                  //4.logical operator

//1.and operator
// Tabhi true return karega jab dono conditions true hongi
// console.log(5 > 3 && 10 > 5);
// console.log(5 > 3 && 10 < 5);

//2.OR operator
// Agar ek bhi condition true ho to result true 
// console.log(5 > 3 || 10 < 5);  
// console.log(5 < 3 || 10 < 5);

//3/Not operator 
// Condition ka result ulta kar deta hai 
// console.log(!(5 > 3));  
// console.log(!(5 < 3));
 
                //5.String Operators
// String ko combine (concatenate) karne ke liye.
// + (concatenation), += (append)

// 1. Concatenation Operator (+) 
// Do strings ko jor (combine) karne ke liye use hota hai 

// let firstName = "Sobia";
// let lastName = "Bibi";
// console.log(firstName + " " + lastName);
// console.log(firstName , lastName);

// 2. Concatenation Assignment (+=)
// Ek string ke sath doosri string add karke assign karta hai

// let message = "Hello";
// message += " World!";
// console.log(message);

                   //6.ternary operator
// Agar condition true hai → pehla value return karega
// Agar condition false hai → doosra value return karega

// let number = 7;
// let result = (number % 2 === 0) ? "Even" : "Odd";
// console.log(result);  // Odd
 

                     //7.Bitwise Operators
// Bitwise operators numbers ko binary (0 aur 1 form) me convert ,
// Matlab decimal number ko pehle binary me badla jata hai, phir har bit par operation apply hota hai.

// 1. AND (&)
// Dono bits 1 ho to result 1, warna 0.

// console.log(5 & 1);  
// 5 = 0101 (binary)
// 1 = 0001
// result = 0001 → 1
 
// 2. OR (|)
// Agar koi ek bit 1 ho to result 1

// console.log(5 | 1);  
// 5 = 0101
// 1 = 0001
// result = 0101 → 5

// 3. XOR (^) (Exclusive OR)
// Sirf alag bits par 1 deta hai.

// console.log(5 ^ 1);  
// 5 = 0101
// 1 = 0001
// result = 0100 → 4

// 4. NOT (~)
// Bits ko invert (0 → 1, 1 → 0) kar deta hai

// console.log(~5);  
// 5 = 0000000000000101
// ~5 = 1111111111111010 → -6 (2's complement form)

// 5. Left Shift (<<)
// Bits ko left me shift karta hai (har shift ka matlab ×2 hota hai)

// console.log(5 << 1);  
// 5 = 0101
// shift left = 1010 → 10

// 6. Right Shift (>>)
// Bits ko right me shift karta hai (har shift ka matlab ÷2 hota hai)

// console.log(5 >> 1);  
// 5 = 0101
// shift right = 0010 → 2

// 7. Unsigned Right Shift (>>>)
// Right shift karta hai, lekin negative numbers ko bhi positive binary me treat karta hai

// console.log(-5 >>> 1);  
// Large positive number return karega

                  //type operator
// 1. typeof
// Kisi variable ka type return karta hai (string ke form me)

// console.log(typeof 123);        // "number"
// console.log(typeof "Hello");    // "string"
// console.log(typeof true);       // "boolean"
// console.log(typeof {});         // "object"
// console.log(typeof []);         // "object" (array bhi object hota hai)
// console.log(typeof undefined);  // "undefined"
// console.log(typeof null);       // "object" (JavaScript ka bug)
// console.log(typeof function(){}); // "function"

// 2. instanceof
// Check karta hai ke ek object kis class/constructor ka instance hai.
// true ya false return karta ha

// let arr = [1, 2, 3];
// console.log(arr instanceof Array);   // true
// console.log(arr instanceof Object);  // true
// console.log(arr instanceof String);  // false
// let date = new Date();
// console.log(date instanceof Date);   // true
