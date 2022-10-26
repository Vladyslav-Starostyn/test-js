const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

console.log(animal);

const x = { a: 7, b: 5, c: 9, w: 3, t: 7 };

console.log(Object.keys(x).length);
