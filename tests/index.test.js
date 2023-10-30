const babel = require("@babel/core");
const glowupVibes = require("../index.js");
const identifierMappings = require("../identifierMappings.js");

test("All identifier mappings should be unique", () => {
  const values = Object.keys(identifierMappings);
  const uniqueValues = [...new Set(values)];
  expect(values.length).toEqual(uniqueValues.length);
});

test("Should replace onGod with true", () => {
  const input = `onGod`;
  const expected = `"use strict";\n\ntrue;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace noCap with true", () => {
  const input = `noCap`;
  const expected = `"use strict";\n\ntrue;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace cap with false", () => {
  const input = `cap`;
  const expected = `"use strict";\n\nfalse;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace ghosted with return null", () => {
  const input = `ghosted`;
  const expected = `"use strict";\n\nreturn null;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace lowkey with console", () => {
  const input = `lowkey`;
  const expected = `"use strict";\n\nconsole;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace stan with log", () => {
  const input = `stan`;
  const expected = `"use strict";\n\nlog;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace console.sus with console.warn", () => {
  const input = `console.sus("yikes fam");`;
  const expected = `"use strict";\n\nconsole.warn("yikes fam");`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace console.cringe with console.error", () => {
  const input = `console.cringe("yikes fam");`;
  const expected = `"use strict";\n\nconsole.error("yikes fam");`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace L with Error", () => {
  const input = `L("yikes fam");`;
  const expected = `"use strict";\n\nError("yikes fam");`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace fr with assert", () => {
  const input = `fr("yikes fam");`;
  const expected = `"use strict";\n\nassert("yikes fam");`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace outOfPocket with Infinity", () => {
  const input = `outOfPocket`;
  const expected = `"use strict";\n\nInfinity;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace PERIODT with break", () => {
  const input = `for (let i = 0; i < 10; i++) PERIODT;`;
  const expected = `"use strict";\n\nfor (let i = 0; i < 10; i++) break;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test("Should replace skrt with break", () => {
  const input = `for (let i = 0; i < 10; i++) skrt;`;
  const expected = `"use strict";\n\nfor (let i = 0; i < 10; i++) break;`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test(`Should replace based with toLowerCase`, () => {
  const input = `"YIKES FAM".based();`;
  const expected = `"use strict";\n\n"YIKES FAM".toLowerCase();`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test(`Should replace yeet with throw`, () => {
  const input = `yeet(new L("YIKES FAM"));`;
  const expected = `"use strict";\n\nthrow new Error("YIKES FAM");`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test(`Should replace clapback with yield`, () => {
  const input = `function* vibes() { clapback(1); }`;
  const expected = `"use strict";\n\nfunction* vibes() {\n  yield 1;\n}`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test(`Should replace SeveralSeats with Array`, () => {
  const input = `new SeveralSeats(2);`;
  const expected = `"use strict";\n\nnew Array(2);`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;
  expect(output).toEqual(expected);
});

test(`Should replace take with fill`, () => {
  const input = `new SeveralSeats(2).take(true)`;
  const expected = `"use strict";\n\nrequire("core-js/modules/es.promise.js");\nnew Array(2).fill(true);`;
  const output = babel.transform(input, {
    filename: './../src/example.js', 
    plugins: [glowupVibes],
  }).code;  
  expect(output).toEqual(expected);
});
