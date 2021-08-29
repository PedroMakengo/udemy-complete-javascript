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

/*

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



var heightJohn = 172;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
*/

// if (scoreJohn > scoreMike) {
//   console.log("John wins the game with" + scoreJohn + "points");
// } else if (scoreMike > scoreJohn) {
//   console.log("Mike wins the game with " + scoreMike + " points");
// } else if (scoreJohn === scoreMike) {
//   console.log("There is a draw..");
// }

// var heightMary = 158;
// var ageMary = 31;
// var scoreMary = heightMary + 5 * ageMary;

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//   console.log("John wins the game with " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//   console.log("Mike wins the game with " + scoreMike + " points!");
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log("Mary wins the game with " + scoreMary + " points");
// } else {
//   console.log("It's a draw.");
// }

/*
function calculateAge(yearOfBirth) {
  var age = 2021 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + " retires in " + retirement + " years");
  } else {
    console.log(name + "is already retired");
  }
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);



var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = "Bean";
console.log(names);

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); // Adiciona um valor no array
john.unshift("Mr. "); // adiciona um valor no array na primeira posição;
john.pop(); // Elimina o último valor do array;
john.shift(); // Elimna o primeiro valor do array;
console.log(john);

john.indexOf("teacher"); // Retorna a posição de um valor dentro do array

if (john.indexOf("teacher") === -1) {
  console.log("John is NOT a teacher");
}



var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
};

console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
(jane.lastName = "Smith"), (jane["yearOfBirth"] = 1969);
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);


var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function (yearOfBirth) {
    var age = 2021 - this.yearOfBirth;
    return age;
  },
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

var mike = {
  yearOfBirth: 1990,
  calculateAge: function (yearOfBirth) {
    var age = 2021 - this.yearOfBirth;
    return age;
  },
};

john.calculateAge();
console.log(mike);
*/

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var names = ["John", "Jane", "Mary", "Mark", "Bob"];

// for (var i = 0; i < names.length; i++) {
//   // console.log(names[i]);
// }

// for (var i = names.length - 1; i > 0; i--) {
//   console.log(names[i]);
// }

// while loops
// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 0; i <= 5; i++) {
//   console.log(i);

//   if (i === 3) {
//     break;
//   }
// }

function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
    ages[i] = 2021 - years[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log(
        "Person is " + i + " " + ages[i] + " years old, and is of full page."
      );
      fullAges.push(true);
    } else {
      console.log("Person is " + i + " " + ages[i] + " years old, ");
      fullAges.push(false);
    }
  }
  return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_1 = printFullAge([2002, 2005, 2007]);
