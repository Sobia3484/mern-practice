// string likhana ka traqa
// const str1 = "hello";
// const str2 = 'world';
// const str3 = `hi`;    mostly use
// console.log(str1,str2,str3);

// const str = `hello coder`;
// console.log(str.length);
// console.log(str[7]);

// str[3] = "o";
// console.log(str);  //not change occure bcz string is immutable make copy than change occure but not in original

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// console.log(str.indexOf('o'));
// console.log(str.indexOf('e'));  ya hamasha pheli value ka index batya ga
// console.log(str.lastIndexOf('e'));

// console.log(str.includes('l')); it return value in boolean 

// console.log(str.slice(4, 8));  slice(initial,last) 
// console.log(str.slice(-4,-1)); //return value from right side

// console.log(str.substring(2,6));  ya b slice() ke tarha he kam karta liken is ma negative(-) value nahi ati

// console.log(str.replace('hello','hi'));  replace(previous , new) 
// console.log(str.replace('e', 'b'));    replace only first value
// console.log(str.replaceAll('e','b'));

// const a = "   hi   "
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());

// concatination 
// let a = 'hello'
// let b = "world"
// let c = a+b;
// console.log(c);
// console.log(a+b);
// console.log(a+" "+b);
// console.log(a,b);

// let names = "ali,ahmad,waqas,hamza";
// console.log(names.split(","));



                // -----Date----- 
// const date = new Date();
// console.log(date);  yah huma GMT wala time mila ga 
// console.log(date.toString());  yaha huma apni device ka time mila ga
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMilliseconds());    isi tarha ka or b function ha 

const now = Date.now();
console.log(now);

// const date = new Date(1760886883921);     // 1760886883921 TimeStamp
// console.log(date.toString());

// const date = new Date(0);
// console.log(date.toString());
