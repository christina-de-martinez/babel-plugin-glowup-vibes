module.exports = function () {
  const identifierMappings = require("./identifierMappings.js");

  const handleIdentifier = (path) => {
    const newName = identifierMappings[path.node.name];
    if (newName) {
      path.node.name = newName;
    }
  };

  const handleExpressionStatement = (path) => {
    const { node } = path;

    if (
      node.expression.type === "CallExpression" &&
      node.expression.callee.name === "yeet"
    ) {
      const errorArgument = node.expression.arguments[0];
      const throwStatement = {
        type: "ThrowStatement",
        argument: errorArgument,
      };
      path.replaceWith(throwStatement);
    }

    if (
      node.expression.type === "CallExpression" &&
      node.expression.callee.name === "clapback"
    ) {
      const yieldArgument = node.expression.arguments[0];
      const yieldExpression = {
        type: "YieldExpression",
        argument: yieldArgument,
      };
      path.replaceWith(yieldExpression);
    }

    if (
      node.expression.type === "CallExpression" &&
      ["itsGiving", "drop", "toilet"].includes(node.expression.callee.name)
    ) {
      const returnValue = node.expression.arguments[0];
      const returnStatement = {
        type: "ReturnStatement",
        argument: returnValue,
      };
      path.replaceWith(returnStatement);
    }

    if (
      node.expression.type === "CallExpression" &&
      node.expression.callee.name === "holdUp"
    ) {
      const args = node.expression.arguments;
      const asyncFunction = {
        type: "FunctionDeclaration",
        id: args[0].id,
        async: true,
        params: [],
        body: args[0].body,
      };
      path.replaceWith(asyncFunction);
    }

    if (
      node.expression.type === "CallExpression" &&
      node.expression.callee.name === "letItCook"
    ) {
      const argument = node.expression.arguments[0];
      const newNode = {
        type: "AwaitExpression",
        argument: argument,
      };
      path.replaceWith(newNode);
    }

    if (
      node.expression.type === "CallExpression" &&
      node.expression.callee.name === "vibeOnEvent"
    ) {
      const args = node.expression.arguments;
    }
  };
  return {
    visitor: {
      Identifier: handleIdentifier,
      ExpressionStatement: handleExpressionStatement,
    },
  };
};
