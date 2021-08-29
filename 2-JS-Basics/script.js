// Leacture: variables
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
// var name = "John";
// var age = 26;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = "teacher";
// isMarried = false;

// console.log(
//   name + " is a " + age + " years old " + job + ". Is he married? " + isMarried
// );

// age = "thirty six";
// job = "driver";

// console.log(
//   name + " is a " + age + " years old " + job + ". Is he married? " + isMarried
// );

// var lastName = prompt("Whait is the last name?");
// console.log(lastName);
// alert(
//   name + " is a " + age + " years old " + job + ". Is he married? " + isMarried
// );

/*
var now = 2021;
var birthYear = now - 26;

birthYear = now - 26 * 2;
// 2021
//
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

*/

/////////////////////
// Lecture: if/else

/*
var name = "John";
var age = 26;
var isMarried = "no";

if (isMarried === "yes") {
  console.log(name + " is marred!");
} else {
  console.log(name + "Will hopefully marry soon :)");
}

isMarried = false;

// if (isMarried) {
//   console.log("YES!");
// } else {
//   console.log("NO!");
// }

if (23 == "23") {
  console.log("Something to print...");
}

*/

var age = 25;

if (age < 20) {
  console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("John is a young man.");
} else {
  console.log("John is a man");
}

var job = "teacher";

job = prompt("What does john do ?");

switch (job) {
  case "teacher":
    console.log("John teachers kids");
    break;
  case "driver":
    console.log("John drives a cab in Lisbon");
    break;
  case "cop":
    console.log("John helps fight crime");
    break;
  default:
    console.log("John does something else.");
    break;
}
