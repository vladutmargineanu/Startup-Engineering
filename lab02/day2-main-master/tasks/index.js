/**
 *  Task1: Declare one of the following, and console.log() each one:
 *
 *  * Integer
 *  * Boolean
 *  * String
 *  * Date
 *  * undefined
 *  * Array of strings
 *  * Object with properties
 */

let myInt = 3;
let undef;

console.log(7);
console.log(true);
console.log('hello');
console.log((new Date).toISOString());
console.log(undef);
console.log(['unu', 'doi']);
console.log({
  "object": {
    "content": 1,
  },
});

/**
 * Task2: Prompt the user for his name. Save it to a variable and console.log() it
 *
 * Hint: you have to use document.addEventListener('DOMContentLoaded') to call your function
 */

function getUserName() {
  let username = prompt("Please enter your name");
  console.log(username);
}

document.addEventListener('DOMContentLoaded', getUserName);

/**
 * Task3: Make a function that, when called, shows an alert to the user after 5 seconds
 */

async function alertMe() {
  await new Promise(r => setTimeout(r, 5000));

  window.alert("Hello!");
}

alertMe();

/**
 * Task4: Make a function that, given a number X, generates an array of random numbers of length X
 */

function rand(x) {
  let arr = [];

  for (i = 0; i < x; ++i) {
    arr.push(Math.random() * 200);
  }

  console.log(arr);

  return arr;
}

/**
 * Task5: Write a function that gets the maximum value from a random array generated with the previous function
 */

arr = rand(10);

function getMax(arr) {
  console.log(Math.max.apply(null, arr));
}

getMax(arr);

/**
 * Task6: This function gets two strings and removes all occurences of the first one in the other. What is wrong with it ?
 */

function removeString(remove, mainString) {
  return mainString.replace(remove, '');
}

// problema e ca se elimina doar prima aparitie. Trebuie folosit modificatorul global ca sa mearga conform asteptarilor
function removeString2(remove, mainString) {
  return mainString.replace(new RegExp(remove, 'g'), '');
}

/**
 * Task7: How does this function work ?
 */

function wtf() {
  [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]][([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([][[]] + [])[+[]] + ([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + (!![] + [])[+!+[]]]((![] + [])[+!+[]] + (![] + [])[!+[] + !+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]] + (!![] + [])[+[]] + (![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[!+[] + !+[] + [+[]]] + [+!+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[!+[] + !+[] + [+[]]])()
}
