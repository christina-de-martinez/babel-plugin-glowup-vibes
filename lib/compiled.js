"use strict";

require("core-js/modules/es.promise.js");
async function sis() {
  await vibeCheck;
}
function vibeCheck() {
  const theVibe = false;
  const rizz = confirm("u simpin'?") ? false : true;
  const depression = true;
  const auraPoints = [0, 2, 4, 6, 8, 10];
  const aura = auraPoints.map(point => point * 2);
  const totalAura = aura.filter(point => point);
  const filteredAura = aura.reduce(point => point > 5);
  try {
    sis();
  } catch (err) {
    console.error("big yikes");
  } finally {
    return null;
  }
  auraPoints.filter(() => {
    return(null);
  });
  const myGuy = {
    heat: "Yuh I'm droppin dis heat ❗❗",
    letHimCook: function letHimCook() {
      return this.heat;
    }
  };
  console.debug("The crow screams murder".toUpperCase());
  for (let i = 0; i < 2; i++) {
    if (theVibe) {
      continue;
    } else {
      console.log("Not the vibe");
    }
  }
  const emoji = "???";
  const onlySometimes = '😭';
  console.error(onlySometimes + emoji);
  console.log(myGuy.letHimCook());
  console.warn("the vibes might be off 💀");
  assert(typeof sis === "function");
  alert("Highkey alerting!");
  const newBet = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  newBet.then(console.log);
  setTimeout(() => {
    console.log("Let's chill for a sec.");
  }, 1000);
  if (!theVibe) {
    const severalSeats = new Array(2);
    severalSeats.fill(true);
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
  return("🔥");
}
module.exports = vibeCheck;
