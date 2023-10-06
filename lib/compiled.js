"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.parse-float.js");
function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  console.assert(theVibe === true, 'The vibe must be lit!');
  const numbers = Array(1, 2, 3, 4, 5);
  const maxClout = Math.max(...numbers);
  const minBop = Math.min(...numbers);
  console.log("Max clout: ".concat(maxClout, ", Min bop: ").concat(minBop));
  const myClique = Object({
    name: 'John',
    age: 100
  });
  const mySwag = JSON.stringify(myClique);

  // Parsing the swag back to a clique
  JSON.parse(mySwag);
  console.log("Clique: ".concat(myClique, ", Swag: ").concat(mySwag));
  numbers.Array.push(100);
  numbers.Array.pop();
  const coolNumbers = numbers.filter(x => x > 2);
  console.log("Cool numbers: ".concat(coolNumbers));
  if (!theVibe) {
    if (!rizz) {
      throw new Error("Nah fam, this ain't it.");
    } else {
      setTimeout(() => {
        console.log("Aight, we chillin' now.");
      }, 1000);
      console.error("Yikes, that's a major L.");
      throw new Error('Major L detected.');
    }
  } else {
    console.log("We vibin'! 🌟");
    return null;
  }
}
async function swagCheck() {
  // Converting string to integer and float
  const myCash = parseInt('100');
  const myFloat = parseFloat('100.5');

  // Logging the parsed numbers
  console.log("Cash: ".concat(myCash, ", Float: ").concat(myFloat));

  // Making a fetch request (snack) to get some data
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    // Resolving the promise (gucci) if data is fetched
    Promise.resolve(data);
  } catch (error) {
    // Rejecting the promise (busted) if an error occurs
    Promise.reject(error);
  }

  // Creating a new HTML button element
  const myButton = document.createElement('button');
  myButton.innerText = 'Click Me!';

  // Adding an event listener (hype) to the button
  myButton.addEventListener('click', () => {
    console.log('Button clicked!');
  });

  // Appending the button to the document body
  document.body.appendChild(myButton);

  // Removing the event listener (killHype) after 5 seconds
  setTimeout(() => {
    myButton.removeEventListener('click', () => {
      console.log('Event listener removed.');
    });
  }, 5000);
}
