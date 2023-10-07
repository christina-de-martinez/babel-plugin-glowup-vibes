"use strict";

function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  const depression = true;
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
      return(depression);
    }
    console.log("slay");
    return null;
  }
  const truth = "she hella bad fr";
  console.log(truth.toUpperCase());
  const weInTheLibrary = "DAMN SHE HELLA BAD";
  console.log(weInTheLibrary.toLowerCase());
}
module.exports = vibeCheck;
