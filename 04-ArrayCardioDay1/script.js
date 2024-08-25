const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(
  (i) => i.year >= 1500 && i.year < 1600
);
console.log("Inventors born in 1500's");
console.table(filteredInventors);

// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map((i) => `${i.first} ${i.last}`);
console.log("Inventors with first & last name", fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((i1, i2) =>
  i1.year > i2.year ? 1 : -1
);
console.log("Inventors: Oldest to Youngest");
console.table(sortedInventors);

// 4. How many years did all the inventors live?
const totalAgeOfInventors = inventors.reduce(
  (acc, i) => acc + (i.passed - i.year),
  0
);

console.log("Total age of inventors", totalAgeOfInventors);

// 5. Sort the inventors by years lived
const ageSortedInventors = inventors.sort((i1, i2) => {
  const i1Age = i1.passed - i1.year;
  const i2Age = i2.passed - i2.year;

  return i1Age > i2Age ? 1 : -1;
});
console.log("Inventors sorted by age");
console.table(ageSortedInventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard de Rochechouart",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
].filter((b) => b.includes("de"));
console.log("Boulevards", boulevards);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => a.split(", ")[1] - b.split(", ")[1]);
console.log("Sorted people", sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const sumVehicle = data.reduce((acc, i) => {
  if (!acc[i]) {
    acc[i] = 0;
  }
  acc[i]++;
  return acc;
}, {});
console.table(sumVehicle);
