"use strict";

//var bei Hoisting var wird vorher eingelesen ge hoisted
//var nicht benutzen !!!
//bringt Gültigkeit durcheinander local und global

//let veränderbar
//const konstant


// let a;
// a = 5;
// console.log(a); ->5

// let b;
// console.log(b); -> undifined
// b = 10;
// console.log(b); -> 10

// c=15;
// console.log(c); -> error c is undifined

var a;
a =5;
console.log(a);

var b;
console.log(b);
b =10;
console.log(b);

c = 15;
console.log(c);
var c;

if(true){
    var d=20;
}

console.log(d);

//----------------------------
console.log("-----------")


let e =25;

if(true){
    // Es wird zuerst im inner codeblock 
    // nach lokaler variable geguckt und dann nach 
    // einer globalen falls intern nicht vorhanden
let e = 30;
 console.log(e);
};

console.log(e);












