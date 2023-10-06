"use strict";

require("core-js/modules/es.promise.js");
function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  console.warn("the vibes might be off 💀");
  if (!theVibe) {
    if (!rizz) {
      throw new Error("this is not it");
    } else {
      console.error("yikes fam");
      throw new Error("major L");
    }
  } else {
    console.log("slay");
    return null;
  }
}

// Using promises is now Fun!
const myPromiseRing = new Promise((resolve, reject) => {
  isBased = true;
  if (isBased) {
    resolve("Go off short king");
  } else {
    reject("thats cringe");
  }
});

// totes maps to all so this is totes VALID:
Promise.all([promise1, promise2]).then(values => {
  console.log(values);
});
const myObj = {
  someKey: "someString"
};
console.log(JSON.stringify(myObj));
