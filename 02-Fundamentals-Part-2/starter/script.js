'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive.');

// function logger() {
//     console.log('My name is Boo.');
// }
//
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${ apples } apples and ${ oranges } oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));


/*
    Code Challenge #1
 */
/*  1. create arrow function 'calcAverage' to calculate the avg of 3 scores (for each team)
*   2. calculate the avg for both teams using the function.
*   3. create a function 'checkWinner' that takes avg score of each team as parameters (avgDolphins and avgKoalas) and
*      then logs the winner to the console "Koalas win (30 vs 13)."
*   4. Use the function to determine winner for 2 data sets (provided
*   5. Ignore draws.
* */

// const dolphinScore1 = 85;
// const dolphinScore2 = 54;
// const dolphinScore3 = 41;
// const koalaScore1 = 23;
// const koalaScore2 = 34;
// const koalaScore3 = 27;
//
// const calcAverage = ( a, b, c ) => ( a + b + c ) / 3;
//
// const avgDolphins = calcAverage( dolphinScore1, dolphinScore2, dolphinScore3 );
// const avgKoalas = calcAverage( koalaScore1, koalaScore2, koalaScore3 );
//
// function checkWinner( avgDolphins, avgKoalas ) {
//     if( avgDolphins >= (avgKoalas * 2) ){
//         console.log(`Dolphins win (${ avgDolphins } vs. ${ avgKoalas }).`);
//     }
//     else if( avgKoalas >= (avgDolphins * 2) ){
//         console.log(`Koalas win (${ avgKoalas } vs. ${avgDolphins}).`);
//     }
//     else {
//         console.log(`No winners.`);
//     }
// }
//
// checkWinner( avgDolphins, avgKoalas );


/*
    V.39 Arrays
 */

// const friends = ['Mike', 'Steve', 'David'];
// const newFriend = friends.push('Richard');
//
// console.log(friends);
// console.log(newFriend);

/*
    Coding Challenge #2 Arrays
 */

// function calcTip( billAmt ) {
//     if ( billAmt > 0 ) {
//         return billAmt >= 50 && billAmt <= 300 ? billAmt * .15 : billAmt * .2;
//     }
//     else {
//         return `Amount must be greater than 0.`;
//     }
// }
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
//
// console.log(tips);
// console.log(total);

/* V42. Objects */

// const markObject = {
//     firstName: 'Mark',
//     lastName: 'Cross',
//     birthYear: 1972,
//     job: 'developer',
//     friends: ['Mike', 'Steve', 'Chris'],
//     hasDriversLicense: false,
//
//     calcAge: function() {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//
//     getSummary: function() {
//         return `${ this.firstName } is a ${ this.calcAge() }-year old ${ this.job } and he has ${ this.hasDriversLicense
//         ? 'a' : 'no' } driver's license.`;
//     }
// }

// const interestedIn = prompt('What are you interested to know about Mark? ' +
//     'You can say firstName, lastName, age, job, or friends.');
// if (markObject[interestedIn]) {
//     console.log(markObject[interestedIn]);
// }
// else {
//     console.log('Invalid entry.  Choose firstName, lastName, age or friends.');
// }
//
// markObject.location = 'Atlanta, US';
// markObject['twitter'] = '@realrealMark';
// console.log(markObject);


// Challenge
// "Mark has 3 friends, and his best friend is called 'Mike.'"  Get name, number of friends and name of best friend as
// properties of the object and dynamically generate the string.

// const numberOfFriends = markObject.friends.length;
// console.log(`${markObject.firstName} has ${numberOfFriends} friends, and his best friend is called '${markObject.friends[0]}'.`);

// Challenge
// "Mark is a 48 year old developer, and he has a driver's license.

// console.log(markObject.getSummary());

/*
    S3. Coding Challenge #3
 */
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2;
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2;
//         return this.bmi;
//     }
// };
//
// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
//
// if ( markBMI > johnBMI ) {
//     console.log(`${ mark.fullName }'s BMI (${ markBMI }) is higher than ${ john.fullName }'s (${ johnBMI })!`);
// }
// else {
//     console.log(`${ john.fullName }'s BMI (${ johnBMI } is higher than ${ mark.fullName }'s (${ markBMI })!`)
// }

/*
    V.46 Iteration: The for Loop
 */

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${ rep } 🏋️`);
// }

/*
    V.47 Looping Arrays, Breaking and Continuing
 */

// const markArray = ['Mark', 'Cross', 2021-1972, 'developer', ['Mike', 'Steven', 'Richard'], true];
// const types = [];
//
// for( let i = 0; i < markArray.length; i++) {
//     // Read the markArray
//     console.log(markArray[i], typeof markArray[i]);
//
//     // 2 ways to fill the types array.
//     // types[i] = typeof markArray[i];
//     types.push(typeof markArray[i]);
// }
//
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
//
// for (let i = 0; i < years.length; i++) {
//     ages[i] = 2021 - years[i];
// }
//
// console.log(ages);

// continue - leaves current iteration of the loop and continue to the next iteration.
// break - completely terminates the loop.

// log only strings
// for (let i = 0; i < markArray.length; i++) {
//     if (typeof markArray[i] !== 'string') continue;
//
//     console.log(markArray[i], typeof markArray[i]);
// }

// log only the number type (2021-1972) and then stop

// for (let i=0; i < markArray.length; i++) {
//     if (typeof markArray[i] === 'number') break;
//     console.log(markArray[i])
// }

/*
    V. 48 Looping Backwards and Loops in Loops
 */

// const mark = ['Mark', 'Cross', 2021-1972, 'developer', ['Mike', 'Steven', 'Richard']];
//
// for (let i = mark.length - 1; i >= 0; i--) {
//     console.log(i, mark[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------------Starting Exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Rep Number ${rep}`);
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
//
// while (dice !== 6) {
//     console.log(`Rolled a ${dice}...continuing.`);
//     dice = Math.trunc(Math.random()*6) +1;
// }