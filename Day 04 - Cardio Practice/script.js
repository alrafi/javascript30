const inventors = [{
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  }
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
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

const transportation = [
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
  "pogostick"
];

// filter
// return an array of object (like initial data)
// just filter the data
const fifteen = inventors.filter(function (inventor) {
  return inventor.year >= 1500 && inventor.year < 1600;
});
console.table(fifteen);

// map
// map property to another property
// return an array
const fullname = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
});
console.log(fullname);

// sort
// return array of object (like initial data but sorted)
const ordered = inventors.sort(function (firstPerson, secondPerson) {
  return firstPerson.year > secondPerson.year ? 1 : -1;
});
console.table(ordered);

// reduce
// return single value (based on container)
// function(container, dataobject){func, initialValueContainer}
const totalYears = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// sort by years lived
const oldest = inventors.sort(function (firstPerson, secondPerson) {
  return firstPerson.passed - firstPerson.year >
    secondPerson.passed - secondPerson.year ?
    -1 :
    1;
});
console.table(oldest);

// reduce exercise
// return object of total each transportation
const transport = transportation.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transport);

// sort
// sort the people alphabetically by last name
const alpha = people.sort(function (firstPerson, secondPerson) {
  const [aLast, aFirst] = firstPerson.split(', ');
  const [bLast, bFirst] = secondPerson.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);