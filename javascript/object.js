// create simple object 
// CRUD create read update delete 
// const student = {    //create
//     name: "Sobia",
//     fname: "Abdul Ghafoor",
//     class: "BS_IT",
//     // we can also write 
//     // "home address": "faisalabad",
// }
// console.log(student);  //read

// console.log(student.class);
// another way to access 
// console.log(student["class"]);
// console.log(typeof student);

// update
// student.rollno = 34;
// console.log(student);

//delete
// delete student.class;
// console.log(student);

// important 
// if we want to access only keys 
// console.log(Object.keys(student));

// if we want to access only values 
// console.log(Object.values(student));

// if we want to access both keys and values 
// console.log(Object.entries(student));

// loop in object 
// for(let num in student){
//     // console.log(num);
//     console.log(num, student[num]);
// }

// recommended method for loop 
// for(let values of Object.values(student)){  //we can also use keys
//     console.log(values);   
// }

// for(let [keys,values] of Object.entries(student)){  
//     console.log(keys,values);   
// }
// Destructuring 
// const student = {    //create
//     name: "Sobia",
//     fname: "Abdul Ghafoor",
//     classno: "BS_IT",
// }
// const name = student.name;
// const classno = student.classno;
// console.log(name,classno);

// best method , shotend , destructuring
// const {name,classno} = student;
// console.log(name,classno);


// function in Object 
// const student = {
//     name: "Sobia",
//     fname : "Abdul Ghafoor",
//     greeting: function(){
//         console.log("hi, how are you");
//         return 20;
//     }
// }
// student.greeting();
// const val = student.greeting();
// console.log(val);

// object in another object 
const student = {
    name: "Sobia",
    fname: "Abdul Ghafoor",
    address: {
        city: "faisalabad",
        state: "pakistan"
    }
}
// console.log(student);
console.log(student.address.state);

