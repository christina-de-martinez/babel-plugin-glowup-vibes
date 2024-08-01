const parser = require("@babel/parser");

module.exports = function (code, opts) {
  const literalIndictors = ['"', '\'', '`'];
  let currentIndicator;
  let insideLiteral = false
  let parsed = "";
  for (let i=0, ch; ch = code[i]; i++) {
    if (insideLiteral) {
      insideLiteral = !(ch == currentIndicator && code[i-1] != '\\')
    } else {
      if (literalIndictors.includes(ch)) {
        currentIndicator = ch;
        insideLiteral = true
      }
    }
    parsed += (!insideLiteral && ch == "\uD83D" && code[++i] == "\uDE2D") ? ";" : ch;
  }
  return parser.parse(parsed, opts)
}