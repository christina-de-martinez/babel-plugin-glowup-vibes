module.exports = function () {
    const identifierMappings = require("./identifierMappings.js")

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
    };

    return {
        visitor: {
            Identifier: handleIdentifier,
            ExpressionStatement: handleExpressionStatement,
        },
    };
};
