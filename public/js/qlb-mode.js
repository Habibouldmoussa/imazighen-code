CodeMirror.defineMode("qlb", function () {
  var letters = [
    "ⴰ",
    "ⴱ",
    "ⴳ",
    "ⴷ",
    "ⴹ",
    "ⴻ",
    "ⴼ",
    "ⴽ",
    "ⵀ",
    "ⵃ",
    "ⵄ",
    "ⵅ",
    "ⵇ",
    "ⵉ",
    "ⵊ",
    "ⵍ",
    "ⵎ",
    "ⵏ",
    "ⵓ",
    "ⵔ",
    "ⵕ",
    "ⵖ",
    "ⵙ",
    "ⵚ",
    "ⵛ",
    "ⵜ",
    "ⵟ",
    "ⵡ",
    "ⵢ",
    "ⵣ",
    "ⵥ",
    "ⵯ",
  ];
  var lettersRegexp = new RegExp("^(" + letters.join("|") + ")");

  var quoteCharacter = '"';

  return {
    token: function (stream, state) {
      if (state.instring) {
        if (stream.match(quoteCharacter)) {
          state.instring = false;
          return "string";
        }
        if (stream.match(/./)) {
          return "string";
        }
      } else if (stream.match(/^\w/)) {
        return "error";
      } else if (state.inhead) {
        if (
          stream.match(lettersRegexp) ||
          stream.match("?") ||
          stream.match("-")
        ) {
          return "head";
        }
        if (stream.match(")")) {
          state.inhead = false;
          return "paren";
        }
        if (stream.match(/\s/)) {
          state.inhead = false;
          return "head";
        }
      } else {
        if (stream.match(quoteCharacter)) {
          state.instring = true;
          return "string";
        }
        if (stream.match("(")) {
          state.inhead = true;
          return "paren";
        }
        if (stream.match(")")) {
          return "paren";
        }

        if (stream.match(/^(1|2|3|4|5|6|7|8|9|0|,)/)) {
          return "number";
        }
      }

      stream.next();
      return null;
    },

    startState: function () {
      return {
        instring: false,
        inhead: false,
      };
    },
  };
});

CodeMirror.defineMIME("text/amz", "amz");
