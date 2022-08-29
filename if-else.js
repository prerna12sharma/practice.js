// this is normal condition

// var r=require("readline-sync")
// var tommorow=r.question("enter:-")
// if (tommorow=="rain"){
//     console.log("he is going to outside")
// }
// else{
//     console.log("he is not going")
// }

// max-min between two number
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


// divisible by both or not
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


// // simple if-else
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

// gussing game
// var r=require("readline-sync")
// var computer=["rock","pepar","scissor"]
// var computermove = computer[Math.floor(Math.random() * computer.length)];
// console.log(computermove)
// var name=r.question("enter your name here:-")
// console.log("hi" +  name)
// console.log("choose any move rock,pepar,scissor")
// var move=r.question("enter your moves:-")
// if (computer==name){
//     console.log("match draw ")
// }
// else if (computermove=="rock" && move=="pepar"){
//     console.log(name+  "is win")
// }
// else if (computermove=="pepar" && move=="rock"){
//     console.log("computer is win")
// }
// else if (computermove=="scissor" && move =="pepar"){
//     console.log("computer is win")
// }
// else if (computermove=="rock" && move=="scissor"){
//     console.log("computer is win")
// }
// else if( computermove=="scissor" && move=="rock"){
//     console.log(name+  "is win ")
// }
// else if (computermove=="pepar" && move=="scissor"){
//     console.log(name+  "is win")
// }
// else{
//     console.log("you are taking wrong input")
// }


// var i=1;
// while (i<=10){
//     if (i%2==0){
//         console.log(i)
//     }
//     i++
// }


// for (var i=1; i<=10; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }


// var i=0;
// do{
//     console.log(i)
//     i++
// }
// while(i>=20){
// }


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
console.log(myCar1,myCar2)