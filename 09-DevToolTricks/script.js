const dogs = [
  {
    name: "Snickers",
    age: 2,
  },
  {
    name: "hugo",
    age: 8,
  },
];

const p = document.querySelector("p");

let makeGreen = function () {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
};

// Regular
console.log("Hello!");

// Interpolated
console.log("Hello I am %s string!", "Interpolated");

const interpolated = "interpolated";
console.log(`Hello I am ${interpolated} string in string template!`);

// Styled
console.log("%c I am some great text", "background:blue; color:white");

// warning!
console.warn("WARNING");

// Error :
console.error("ERROR");

// Info
console.info("Information probably not useful");

// Testing
console.assert(1 === 2, "Expected 1 to equal to 2");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((x) => {
  console.groupCollapsed(`${x.name}`);
  console.log(`Name: ${x.name}`);
  console.log(`Age: ${x.age}`);
  console.groupEnd(`${x}`);
});

// counting
console.count("JavaScript");
console.count("TypeScript");
console.count("JavaScript");
console.count("TypeScript");
console.count("JavaScript");
console.count("TypeScript");
console.count("JavaScript");
console.count("TypeScript");
console.count("JavaScript");
console.count("TypeScript");

// timing
console.time("fetching data");
window
  .fetch("https://api.github.com/users/muraliprajapati")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
