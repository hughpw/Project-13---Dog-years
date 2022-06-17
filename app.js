
let myAge = 22;

let myAgeDogYears = (((myAge - 2) * 4.5) + 15 + 9);

console.log(`I am ${myAge} years old.
In dog years I am ${myAgeDogYears} years old.`);

let dogAge = 45;

let dogYearsHumanAge = ((dogAge - 9 - 15) / 4.5);

console.log(`If a dog is ${dogAge} years old in dog years
it would only be ${Math.round(dogYearsHumanAge)} years old as a human!`)