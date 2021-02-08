/*
    Introduction
 */
// let js = "amazing";
// console.log(40 + 8 + 23 -10);
//
// let country = "United States";
// let continent = "North America";
// let population = 320;
//
// console.log(country);
// console.log(continent);
// console.log(population);

/*
    JavaScript Fundamentals - Part 1

    Lecture: Values and Variables
 */

// let javascriptIsFun = true;
//
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Mark');

/*
    JavaScript Fundamentals - Part 1

    Lecture: Data Types
 */

// let isIsland = false;
// let language;
//
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*
    JavaScript Fundamentals - Part 1

    Lecture: Let, Const, and Var
 */

// Simple challenge; not completed.

/*
    JavaScript Fundamentals - Part 1

    Lecture: Basic Operators
 */

/*
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK
 */

// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;
//
// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;
//
// let markHigherBMI = markBmi > johnBmi;
//
// console.log(markBmi, johnBmi, markHigherBMI);

/*
    JavaScript Fundamentals - Part 1

    Lecture: Basic Operators + next lesson (Strings and Template Literals)
 */

// let usPopulation = 330;
// let halfPopulation = usPopulation / 2;
// console.log(`1. ${halfPopulation} million`);
//
// usPopulation += 1;
// console.log(`2. ${usPopulation} million`);
//
// let finlandPopulation = 6;
// console.log(`3. ${finlandPopulation > usPopulation}`);
//
// let avgPopulation = 33;
// console.log(`4. ${usPopulation < avgPopulation}`);
//
// let description = `The United States is in North America, and it's ${--usPopulation} million people speak English.`
// console.log(description);

/*
    JavaScript Fundamentals - Part 1

    Lecture: Taking Decisions: if/else Statements
 */


/*
    JavaScript Fundamentals - Part 1
    Coding Challenge #2
 */

// if( markHigherBMI ) {
//     console.log(`Mark's BMI(${markBmi}) is higher than John's(${johnBmi}).`)
// }
// else (
//     console.log(`John's BMI(${johnBmi}) is higher than Mark's(${markBmi}).`)
// )



/*
    JavaScript Fundamentals - Part 1
    Coding Challenge #3
 */

const dScore1 = 97;
const dScore2 = 112;
const dScore3 = 101;

const kScore1 = 109;
const kScore2 = 95;
const kScore3 = 106;

let avgDScore = (dScore1 + dScore2 + dScore3) / 3;
let avgKScore = (kScore1 + kScore2 + kScore3) / 3;

if( avgDScore > 100 && avgKScore > 100 )
    if( avgDScore > avgKScore ) {
        console.log(`Dolphins average score (${avgDScore}) is higher than the Koala's average score (${avgKScore}).`)
    } else if( avgDScore === avgKScore ) {
    console.log(`Dolphins and Koalas have the same average score.`)
    } else {
    console.log(`Koala's average score (${avgKScore}) is higher than the Dolphin's average score (${avgDScore})`)
    }
else {
    console.log(`You must have at least an average score of 100.`)
}
// console.log(avgDScore, avgKScore);




















































