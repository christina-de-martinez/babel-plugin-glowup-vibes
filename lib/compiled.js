"use strict";

function vibeCheck() {
  const theVibe = false;
  const rizz = true;
  console.warn("the vibes might be off 💀");
  if (!theVibe) {
    if (!rizz) {
      throw new Error("mid af");
    } else {
      console.error("yikes fam");
      throw new Error("major L");
    }
  } else {
    console.log("slay");
    return null;
  }
}
