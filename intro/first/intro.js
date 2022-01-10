// //var x;
// console.log(x);

// function changeString(){
//     //function scoped
//     var other = "try to print the secret message!!!!!";
//     x = "changed";
// }

// function unchangeString(){
//     x = "hey it's me!";
// }

// var x = "hey it's me!";

// console.log(x);
// changeString();
// console.log(x);
// unchangeString();
// console.log(x);

// console.log(other);

//let, const

// console.log(x);
// let x = "hey it's me!";

// for(let i = 0; i < 100; i++){}
// if(50 < 100){
//     let i = "hey again!";
// }
// won't work!!!!!
// console.log(i);

// const numOfStudents = 27;
// console.log(numOfStudents);
//const variables cannot be REASSIGNED
// numOfStudents++;
// numOfStudents = 47;

const faveNums = [4,8,15,16,23,42];
// destructuring an array the ORDER matters
let [first, second, banana,,other] = faveNums;
// let [first, second, ...others] = faveNums;
first = 14;
faveNums[5] = 68;
// console.log(others);
var newList = [1, ...faveNums, 99];
console.log(newList);
faveNums.push(14);


// const sundae = {
//     sauce: "hot fudge",
//     flavor: "vanilla",
//     topping: "pecans"
// }
//destructuring an object, the NAME matters
// const {flavor, ...chocolateSoup} = sundae;
// sundae.topping = "peanuts";
// console.log(chocolateSoup);

// let jumboSundae = {
//     ...sundae,
//     whippedCream: true,
//     cherry: true,
//     sprinkles: "rainbow",
//     fruit: "pineapple"
// }
// console.log(jumboSundae);