'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Enhanced Object Literal Syntax (3 new ways)
// 1. include an object in another object just by using the object's name (old syntax would be: objectName = objectName;
// 2. remove the 'function' keyword from object functions and just use the function's name (see below)
// 3. computed property names (dynamic)
//
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { //computed property names, can use any computation for property names
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


// Data needed for first part of the section
// notice the new ES6 syntax for defining functions below (order, orderDelivery, orderPasta), just use the function name followed by the args:
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, // points to the openHours object above; this is new ES6 syntax, was: openingHours = openingHours;
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered by ${time} to ${address}.`)
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Your delicious pasta is made with ${ing1}, ${ing2}, and ${ing3}.`);
  }
};


///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const gameOdds = Object.values(game.odds);
let totalOdd = 0;
for (const odd of gameOdds) totalOdd += odd;
console.log(`Average Odd: ${totalOdd / gameOdds.length}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odds of victory for ${team}: ${odd}`);
}

// // Looping Objects: Objects Keys, Values and Entries
// // Property Names
// // Looking at Object.keys
// const properties = Object.keys(openingHours);
// console.log(properties);
//
// // How many days is the restaurant open (check the number of properties on the object:
// let openStr = `The restaurant is open ${properties.length} days: `
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
//
// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);
//
// // Entire Object
// // Entries (keys + values)
// const entries = Object.entries(openingHours);
// console.log(entries);
//
// for (const [day, {open, close}] of entries) {
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }


// // Optional Chaining and Nullish Coalescing Operator (almost always used together)
// // Check if restaurant open on a specified day
// // to check for every day you would have to check if both the individual day && the openingHours property exists at all
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//
// // using optional chaining instead
// console.log(restaurant.openingHours.mon?.open); //immediately return undefined if the property before '?' (mon) doesn't exist
// console.log(restaurant.openingHours?.mon?.open); //immediately return undefined if the property before '?' (mon and openingHours) doesn't exist
//
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //nullish coalescing operator prevents zero from returning 'closed' for Saturday hours
//   console.log(`On ${day}, we open at ${open}`);
// }
//
// // Methods (using optional chaining and nullish coalescing op)
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist.') //optional chaining method checks to make sure that order method exists in object, if it doesn't 'undefined' is immediately returned and the nullish coalescing op executes the 2nd part of the statement, 'method not found.'
//
// // Arrays (using optional chaining and nullish coalescing op)
// const users = [{name: 'Mark', email: 'hello@mark.com'  }];
// console.log(users[0]?.name ?? `User array doesn't exist.`);
//
// //
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
//
// // use entries() to get index of elements in for/of loop.  NOTE: this also puts the index & element into their own arrays:
// for (const item of menu.entries()) console.log(item);
// // use destructuring in the loop syntax to break the items into counters and elements:
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
