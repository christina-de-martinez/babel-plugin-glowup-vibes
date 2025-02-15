const parser = require("@babel/parser");

const yap = {
  start: "yappingStarts",
  end: "yappingEnds",
  single: "yap",
};

module.exports = function (code, opts) {
  const literalIndictors = ['"', "'", "`"];
  let currentIndicator;
  let insideLiteral = false;
  let insideJSDoc = false;
  let parsed = "";
  for (let i = 0, ch; (ch = code[i]); i++) {
    if (insideLiteral) {
      insideLiteral = !(ch == currentIndicator && code[i - 1] != "\\");
      parsed += ch;
    } else {
      if (literalIndictors.includes(ch)) {
        currentIndicator = ch;
        insideLiteral = true;
      }

      // Sob emoji for semicolon
      if (ch == "\uD83D" && code[++i] == "\uDE2D") {
        parsed += ";";
      } else if (ch !== "y") {
        parsed += ch;
      } else {
        const word = code.slice(i).match(/^\w+/)?.[0];

        switch (word) {
          case yap.start:
            parsed += "/*";
            break;
          case yap.end:
            parsed += insideJSDoc ? " */" : "*/";
            insideJSDoc = false;
            break;
          case yap.single:
            insideJSDoc ||= code.slice(i - 14, i) === yap.start + " ";
            if (insideJSDoc) {
              parsed = parsed.slice(0, -1) + "*";
            } else {
              parsed += "//";
            }
            break;
          default:
            parsed += ch;
            break;
        }

        i += Object.values(yap).includes(word) ? word.length - 1 : 0;
      }
    }
  }
  return parser.parse(parsed, opts);
};
