const data = require("./data.js");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup
(b) Away Team name for 2014 world cup
(c) Home Team goals for 2014 world cup
(d) Away Team goals for 2014 world cup
(e) Winner of 2014 world cup  */


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(/* code here */) {

    /* code here */

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(/* code here */) {

};

getAllWinners();

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `country code` and returns the number of world cup wins that country has had. 

Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getAllWinners();


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and calculates the team with the most goals score per appearance (avergae goals for) in the World Cup finals */

function getCountryWins(/* code here */) {

    /* code here */

};

getAllWinners();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (avergae goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */
