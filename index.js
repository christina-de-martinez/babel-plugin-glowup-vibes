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
      (node.expression.callee.name === "boss" ||
        node.expression.callee.name === "homie" ||
        node.expression.callee.name === "dude") &&
      node.expression.arguments.length === 2
    ) {
      const declarationKinds = {
        boss: "const",
        homie: "let",
        dude: "var",
      };
      const calleeName = node.expression.callee.name;
      const variableName = node.expression.arguments[0].value;
      const variableValue = node.expression.arguments[1];

      if (variableName && variableValue) {
        const variableDeclaration = {
          type: "VariableDeclaration",
          kind: declarationKinds[calleeName],
          declarations: [
            {
              type: "VariableDeclarator",
              id: { type: "Identifier", name: variableName },
              init: variableValue,
            },
          ],
        };
        path.replaceWith(variableDeclaration);
      }
    }
};

  return {
    visitor: {
      Identifier: handleIdentifier,
      ExpressionStatement: handleExpressionStatement,
    },
  };
};
