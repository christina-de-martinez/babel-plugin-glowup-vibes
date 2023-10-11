module.exports = function () {

    const identifierMappings = {
        
        onGod: "true",
        noCap: "true",
        cap: "false",
        ghosted: "return null",
        lowkey: "console",
        stan: "log",
        sus: "warn",
        cringe: "error",
        tea: "info",
        L: "Error",
        fr: "assert",
        grab: "require",
        ship: "exports",
        itsGiving: "return",
        drop: "return",
        dis: "this",
        highkey: "alert",
        bet: "confirm",
    };
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
    };

    return {
        visitor: {
            Identifier: handleIdentifier,
            ExpressionStatement: handleExpressionStatement,
        },
    };
};
