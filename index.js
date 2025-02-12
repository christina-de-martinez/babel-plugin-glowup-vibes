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
      (node.expression.callee.name === "itsGiving" ||
        node.expression.callee.name === "drop")
    ) {
      const errorArgument = node.expression.arguments[0];
      const throwStatement = {
        type: "ReturnStatement",
        argument: errorArgument,
      };
      path.replaceWith(throwStatement);
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
      (node.expression.callee.property?.name === "findOut" ||
        node.expression.callee.property?.name === "eitherWay")
    ) {
      function getBlocks(token) {
        const argument = token.arguments[0];
        const callee = token.callee;

        if (callee.name === "fuckAround") {
          return { try: { body: argument.body } };
        }

        return {
          ...getBlocks(callee.object),
          [callee.property.name === "findOut" ? "catch" : "finally"]: {
            body: argument.body,
            param: argument.params?.[0],
          },
        };
      }
      const blocks = getBlocks(node.expression);

      const tryCatch = {
        type: "TryStatement",
        block: blocks.try.body,
        handler: {
          type: "CatchClause",
          param: blocks.catch.param,
          body: blocks.catch.body,
        },
        finalizer: blocks.finally?.body,
      };
      path.replaceWith(tryCatch);
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
