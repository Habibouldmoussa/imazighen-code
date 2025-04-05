Rainbow.extend(
  "qlb",
  [
    {
      matches: {
        1: "special-form",
      },
      // 'pattern': /\((لامدا|حرفي|إفعل|حدد|عدل|إذا)/g
      pattern: /\((ⵎⴰ| )/g,
    },
    {
      matches: {
        1: "function",
      },
      pattern: /\(([ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث\-؟]{2,})/g,
    },
    {
      name: "string",
      pattern: /"[^"]+"/g,
    },
    {
      name: "number",
      pattern: /[1|2|3|4|5|6|7|8|8|0|,]+/g,
    },
    {
      matches: {
        1: "latin",
      },
      pattern: /\s(\w+)/g,
    },
  ],
  true
);
