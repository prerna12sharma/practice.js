// var a=5;
// var a=6;
// var b=a+a;
// console.log

// let a=3;
// let b=6;
// let c=a+b;
// console.log(c)

// const a=4;
// const b=5;
// const c=a+b;
// console.log(c)

// const a="radha";
// console.log(a)


// var a=20;
// var b=a+6;
// console.log(b)


// var a=6;
// a--
// console.log(a)


// var a=15;
// var b=10;
// console.log(a*=b)

// var a=10;
// var b=5;
// console.log(!(a<b))

// var input=require("readline-sync")
// var num=input.questionInt("enter a num")
// if (num%2==0){
//     console.log("even")
// }else if(num%3==0){
//     console.log("odd")
// }else{
//     console.log("enter valid num")
// }


// var i=0;
// while (i<=10){
//     console.log(i)
//     i++


// var input=require("readline-sync")
// var base=input.questionInt("enter the base of a trangle:")
// var hight=input.questionInt("enter the hight of a trangle:")

// var area=(base*hight)/2
// console.log("the area of the trangle is:"+area)

// var input=require("readline-sync")
// var a=input.questionInt("enter the first variable:")
// var b=input.questionInt("enter the second variable:")
// var c=a;
// a=b;
// b=c;
// console.log(`the value of a after swapping: ${a}`)
// console.log(`the value of b after swapping: ${b}`)

// let isTrue = "True";
// if(isTrue){
//   console.log("Output should show")
// }
// if(isTrue === "False"){
//   console.log("Both are same")
// }
// else {
//   console.log("Please run it. if all conditions false")
// }

// var i=2;
// var j=1;
// do{
//     console.log(i*j)
// j++
// }
// while (j<=10);

// for(var i=0; i<=10; i++){
//     console.log(i)
// }

// var i=1;
// var sum=0;
// do{
//     sum=sum+i
// i++
// }
// while(i<=10);
// console.log(sum)

// var cars=["maruti","bmw","swift"]
// for(car in cars){
// }
// console.log(cars[2])

// var a=1;
// while(a<5){
//     a++
//     console.log(a)
// }

// for(i=1;i<=5;i++){
//     if (i==3){
//         break
//     }    
//     console.log(i)
//
// var num=10;
// var x=0;y=1;z=0;
// while(y<=num){
//     x=y
//     y=z
//     z=x+y
//     console.log(z)
// }

// console.log(NaN===NaN)

// var a=["nikki","shotriya"]
// console.log(a[0]+a[1])
// var sum=""
// for (var i=0;i<a.length;i++){
//     sum=sum+a[i]   
// }
// console.log(sum)


// var a=[[1,2],[2,3],[3,4]]
// for (i=0;i<a.length;i++){
//     console.log(i)
// }
// for (var i=0;i>-a.length;i--){
//     console.log(i)
// }


// let studentsData = ['Jack', 24];
// studentsData.toString()
// console.log(typeof(studentsData))

// const name = "My name is 'Peter'.";
// console.log(name)

// const message1 = 'This is a long message ' +
//     'that spans across multiple lines' + 
//     'in the code.'

// // using the \ operator
// const message2 = 'This is a long message \
// that spans across multiple lines \
// in the code.'

// console.log(message1)
// console.log(message2)


// const a = 0xff;
// console.log(a); // 255

// // const b = 0x00 ;
// // console.log(b); 

// console.log("hello everyone")
// console.log("welcome to KBC")
// console.log("very good luck for your game")
// console.log("so lets play the game")
// var question_list = [
//     "What is the capital of India?", "how many colours in rainbow?",
//     "NG mei kaun se course padhaya jaata hai?", "how many girls live one room of ng?"
// ]

// var options_list = [
//     ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
//     ["7", "8", "6", "5"],

//     ["Software Engineering", "Counseling", "Tourism", "Agriculture"],
//     ["9", "8", "5", "10"]
// ]

// var solution_list = ["d", "a", "a", "d"]

// var i = 0
// while (i < question_list.length) {
//     console.log(i + 1, question_list[i])
//     var j = 0
//     while (j < options_list[i].length) {
//         console.log(j + 1, options_list[i][j]),
//             j++
//     }
//     var user = require("readline-sync")
//     var n = user.question("enter option")
//     if (n == solution_list[i]) {
//         console.log("wow!!,congrats")
//     } else {
//         console.log("oops!,better luck for the next time")
//     }
//     break
//     i++
// }
// var x=12;
// var y=8;
// var res=eval("x+y");
// console.log(res)


// try {
//     setTimeout(function() {
//         // error in the code
//     }, 3000);
// } catch (e) {
//   console.log( "won't work" );
// }

// const number = 5;
// throw number/0;

// function greetPerson(name) {
//     return `Hello ${name}`;
// }
// // importing greetPerson from greet.js file
// import { greetPerson } from './hello.js';

// // using greetPerson() defined in greet.js
// let displayName = greetPerson('Jack');

// console.log(displayName); // Hello Jack


// export const name = 'JavaScript Program';

// // exporting the function
// export function sum(x, y) {
//     return x + y;
// }
// import  sum  from './hello.js';

// // console.log(name);
// let add = sum(4, 9);
// console.log(add); // 13
// import sum  from './hello.js';

// export const name = "Jesse";
// export const age = 40;
// console.log(name)
// console.log(age)


// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const person1 = new Person('John');
  
//   console.log(person1.name)

// export default function contact(name, age) {
//     console.log(`The name is ${name}. And age is ${age}.`);
// }
// import {hello} from './hello.js';

// hello('Sara', 25);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // creating an object
// const person1 = new Person('John');
// const person2 = new Person('Jack');

// console.log(person1.name); // John
// console.log(person2.name); // Jack

// class Person {
//   constructor() {
//     // a = 0;
//     this.name =p;
//   }
// }

// let p = new Person(); 


// var arr=[1,2,3,4,5,6]
// var filterarr=arr.filter((val)=>val%2!=0)
// console.log(filterarr)


// /
// function prime()
// var a = require("readline-sync")
// var b = a.questionInt("enternumber")
// var i = 1
// var c = 0
// while (i <= b) {
//     if (b % i == 0) {
//         c++
//     }
//     i++
// }
// if (c == 2) {
//     console.log("prime number")
// } else {
//     console.log("not prime number")
// }
// prime()





// const newArray = [1, 3, 2, 5, 10];
// const isPrime = num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// };
// const myPrimeArray = newArray.filter(val => isPrime(val));
// console.log(myPrimeArray);




// using map function
// var arr=[1,2,3,4,5,6]
// var filterarr=arr.map((val)=>val+1)
// console.log(filterarr)



// // sum of the value
// var arr=[1,2,3,4,5,6]
// var filterarr=arr.reduce((prev,curr)=> prev+curr)
// console.log(filterarr)

// var r=require("readline-sync")
// var tommorow=r.question("enter:-")
// if (tommorow=="rain"){
//     console.log("he is going to outside")
// }
// else{
//     console.log("he is not going")
// }


// var a=require("readline-sync")
// var rahul=a.questionInt("enter any num:-")
// var rohit=a.questionInt("enter any num:-")
// if (rahul>rohit){
//     console.log("rahul is greater than rohit")
// }
// if (rohit>rahul){
//     console.log("rohit is freater than rahul")
// }
// else{
//     console.log("both are equal")
// }


// var a=require("readline-sync")
// var time=a.question("enter time:-")
// if (time>=5 && time<=6){
//     console.log("sleep well")
// }
// if (time>6 && time<=7){
//     console.log("morning exercise")
// }
// if (time>7 && time<=8.30){
//     console.log("breakfast")
// }
// if (time>8 && time<=10.30){
//     console.log("study")
// }

// var a=require("readline-sync")
// var time=a.questionInt("enter time:-")

// if (time >= 5 && time <= 6) {
//  console.log("sleep well");
// }
// else if (time >= 6 && time <= 7) {
//  console.log("Morning Exercise");
// }
// else if(time > 7 && time < 8.30){
//  console.log("Break+Breakfast");
// }
// else if ( time > 8.30 && time < 12){
//  console.log("Study");
// }


// var a=require("readline-sync")
// var num=a.questionInt("enter any num:-")
// if (num%7==0 && num%3!=0){
//     console.log("choco")
// }
// else if (num%3==0 && num%7!=0){
//     console.log("late")
// }
// else if (num%3==0 && num%7==0){
//     console.log("chocolate")
// }
// else{
//     console.log("this num is out of condition")
// }



