'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered by ${time} to ${address}.`)
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your delicious pasta is made with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
* Spread op is to unpack an array, while the Rest op is used to pack elements into an array.
* Spread operator when used on the right side of the assignment operator (=) // See below for Spread examples
* Ex: const arr = [1, 2, ...[3, 4]]; // [1, 2, [3, 4]]
* Rest operator when used on the left side of the assignment operator (=) // See below for Rest examples
* Rest op should be used to 'pack' an array during destructuring
* 'Rest' stands for the rest of the elements in an array, so should be the last element in the destructuring array
 */

/*
* Rest Operator
 */
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

/*
Spread Operator
*** Used for building new arrays, passing values to functions, and expanding arrays into individual elements
*** Can be used on all iterables and since ES2018 on objects
*** Unpacks all array elements into individual elements
*** works on arrays, maps, strings, sets, (not on objects before ES2018)
*** useful to manipulate elements that would ordinarily be separated by commas
 */

// create a new array from an existing arr and add new elements
const arr1 = [1, 2, 3];
const newArr = [...arr1, 4, 5];
console.log(newArr);

// extract array elements into individual elements
console.log(...newArr);

// copy an array
const newArrCopy = [...newArr];
console.log(newArrCopy);

// join 2 arrays
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [6, 7, 8, 9, 10];
const joinedArr = [...arr5, ...arr6];
console.log(joinedArr);

// use with strings
const str = 'Mark';
const letters = [...str, ' ', 'C'];
console.log(letters);
console.log(...str);

// use an array as an argument to a function
// const ingredients = [
//     prompt('Ingredient 1?'),
//     prompt('ingredient 2?'),
//     prompt('ingredient 3?')
// ];
//
// restaurant.orderPasta(...ingredients);

// objects



/*
Destructure Objects
*/
// destruct with object property names
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// rename destructured variables
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours.thu, tags);

// create new property array if doesn't exist on object, rename variable for starterMenu and set default empty array if doesn't exist.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutate variables in objects
let a = 111;
let b = 999;
const obj = { a: 14, b: 22 };
// enclose destructuring assignment in parens to mutate an object's properties
({ a, b } = obj);
console.log(a, b); // 14 22

// nested objects
const { fri: { open, close } } = openingHours; // openingHours defined above near line 38 on the restaurant object
console.log(open, close);

// submitting an object and automatically destructuring at the object level
restaurant.orderDelivery({
  address: '2240 West Valley Rd',
  starterIndex: 1
});

/*
Destructure Arrays
*/

// Destructuring, immediately create 2 variables for the returned array
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

// return top level array (with nested array)
// console.log(i, j);

// destructure nested array
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);