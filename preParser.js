const parser = require("@babel/parser");

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
          case "yappingStarts":
            parsed += "/*";
            i += word.length - 1;
            break;
          case "yappingEnds":
            parsed += insideJSDoc ? " */" : "*/";
            insideJSDoc = false;
            i += word.length - 1;
            break;
          case "yap":
            insideJSDoc ||= code.slice(i - 14, i) === "yappingStarts ";
            if (insideJSDoc) {
              parsed = parsed.slice(0, -1) + "*";
            } else {
              parsed += "//";
            }
            i += word.length - 1;
            break;
          default:
            parsed += ch;
            break;
        }
      }
    }
  }
  return parser.parse(parsed, opts);
};
