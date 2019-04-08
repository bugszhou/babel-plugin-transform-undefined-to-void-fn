"use strict";

module.exports = function({
                            types: t
                          }) {
  const VOID_0 = {
    type: 'CallExpression',
    callee: {
      type: 'Identifier',
      name: 'void',
    },
    // arguments: [{ type: 'NumericLiteral', value: 0 }], // t.numericLiteral(0)
    arguments: [t.numericLiteral(0)],
    prefix: true,
  };
  return {
    name: "transform-undefined-to-void",
    visitor: {
      ReferencedIdentifier(path) {
        if (path.node.name === "undefined") {
          path.replaceWith(VOID_0);
        }
      },
    },
  };
};