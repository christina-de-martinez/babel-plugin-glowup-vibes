const parser = require("@babel/parser");

module.exports = function (code, opts) {
  const literalIndictors = ['"', "'", "`"];
  let currentIndicator;
  let insideLiteral = false;
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

      if (ch == "\uD83D" && code[++i] == "\uDE2D") {
        parsed += ";";
      } else if (ch !== "y") {
        parsed += ch;
      } else {
        const word = code.slice(i).match(/^\w+/)?.[0];
        if (word === "yappingStarts") {
          parsed += "/*";
          i += word.length - 1;
        } else if (word === "yappingEnds") {
          parsed += "*/";
          i += word.length - 1;
        } else {
          parsed += ch;
        }
      }
    }
  }
  return parser.parse(parsed, opts);
};

