// function
// function greeting(){
//     console.log("hi, how are you!");
// }
// greeting();

// with console.log "ya just value ko screen par print karna ka lia use hota ha ya value ko return nahi karta"
// function addNum(num1,num2){    //here num1 and num2 are called the parameters
//     // const sum = num1+num2;
//     // console.log(sum);
//     console.log(num1+num2);
// }
// addNum(3,7)  // here 3 and 7 are called the arguments
// const res = addNum(6,6);
// console.log(res);  //agar hum is ko is tarha likha ga to ya undefind return kara ga

//with return keyword "ya value ko return karta ha or reuse b hota ha "
// function addnum(num1,num2){
//     return num1+num2;
// }
// const result = addnum(8,3);
// console.log(result);


// add 3 or 4 number 
// function addNum(num1,num2,num3=0,num4=0){
//     console.log(num1+num2+num3+num4);
// }
// addNum(7,2)
// addNum(4,9,5)
// addNum(8,4,9,2)

// if we want to add more number in future then we use 
// rest operation (rest operator value ko catch karna ka lia use hota ha, it display result in array)

// function addNum(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n; 
//     }
//      console.log(sum);
// }
// addNum(4,5,6,7,8);
// addNum(3,4,2,7,9,2,6,44,98,6544,946,464,29);

// spread operator (ya khol data ha ya kha sakhta ah ka ya merg kar data ha, ya array ya object ma use hota ha)

// const arr1 = [10,20,30,90,50];
// const arr2 = [40,100,60,70];
// const ans = [...arr1,...arr2]
// console.log(ans);

// another way to represent function 
// const greeting = function(){
//     return "Good morning";
// }
// console.log(greeting());

// arow function 
// const greeting = ()=>{
//     console.log("Good Afternoon");
// }
// greeting();

// const addNum =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addNum(4,8));

// by simplify this Syntax 
// const addNum=(num1,num2)=> num1+num2;
// console.log(addNum(7,2));

// more simplify if we have only one parameter
// const sqr= num=> num*num;
// console.log(sqr(6));

//  object within arrow function 
 
// const student =()=>{
//     user = {
//         name: "Sobia",
//         rollno: 34
//     }
//     return user
// }
// console.log(student());

// const student =()=>{
//     return{
//         name: "Sobia",
//         rollno: 34
//     }
// }
// console.log(student());

// const student =()=>({
//         name: "Sobia",
//         rollno: 34})
// console.log(student());

// IIFE stands for Immediately Invoked Function Expression. ()();
// (function(){
//     console.log("hi");
// })();
// also use arrow function 
// (()=>{
//     console.log("hello");
// })();

// callback function 
function greeting(name,callback){
    console.log("hello", name);
    callback();
}
function wishes(){
    console.log("Best of luck ");
    
}
greeting("Sobia",wishes)