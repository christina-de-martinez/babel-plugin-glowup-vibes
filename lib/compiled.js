"use strict";

function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  console.warn("the vibes might be off 💀");
  assert(rizz === true);
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
module.exports = vibeCheck;
