"use strict";

function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  const depression = true;
  const myGuy = {
    heat: "Yuh I'm droppin dis heat ❗❗",
    letHimCook: function letHimCook() {
      return (this.heat);
    }
  };
  console.log(myGuy.letHimCook());
  console.warn("the vibes might be off 💀");
  assert(rizz === true);
  if (!theVibe) {
    if (!rizz) {
      throw new Error("mid af");
    } else {
      console.error("yikes fam");
      throw new Error("major L");
    }
  } else {
    if (depression === true) {
      console.info("you should talk to someone about that queen 👑");
      return depression;
    }
    console.log("SLAY".toLowerCase());
    return null;
  }
}
module.exports = vibeCheck;
