// ## Array Cardio Day 2

const people = [
  {
    name: "Wes",
    year: 1988,
  },
  {
    name: "Kait",
    year: 1986,
  },
  {
    name: "Irv",
    year: 1970,
  },
  {
    name: "Lux",
    year: 2015,
  },
];

const comments = [
  {
    text: "Love this!",
    id: 523423,
  },
  {
    text: "Super good",
    id: 823423,
  },
  {
    text: "You are the best",
    id: 2039842,
  },
  {
    text: "Ramen is my fav food ever",
    id: 123523,
  },
  {
    text: "Nice Nice Nice!",
    id: 542328,
  },
];

const currentYear = new Date().getFullYear();

// Array.prototype.some() 
// is at least one person 18 or older?
var isAdult = people.some((p) => currentYear - p.year >= 18);
console.log({ isAdult });

// Array.prototype.every() 
// is everyone 18 or older?
var isEveryoneAdult = people.every((p) => currentYear - p.year >= 18);
console.log({ isEveryoneAdult });

// Array.prototype.find()
// find the comment with the ID of 823423
const comment = comments.find((c) => c.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((c) => c.id === 823423);
comments.splice(index, 1);
console.table(comments);
