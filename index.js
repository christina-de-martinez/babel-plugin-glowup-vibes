module.exports = function () {
    const identifierMappings = {
        "onGod": "true",
        "noCap": "true",
        "cap": "false",
        "ghosted": "return null",
        "lowkey": "console",
        "stan": "log",
        "sus": "warn",
        "cringe": "error",
        "L": "Error",
        "typah": "typeof",
        "fr": "if",
        "orfr": "else if",
        "nah": "else"
    };

    function handleIdentifier(path) {
        if (path.node.name in identifierMappings) {
            path.node.name = identifierMappings[path.node.name];
        }
    }

    function handleExpressionStatement(path) {
        if (path.node.expression.type === "CallExpression" && path.node.expression.callee.name === "yeet") {
            path.replaceWith({
                type: "ThrowStatement",
                argument: path.node.expression.arguments[0],
            });
        }
    }

    return {
        visitor: {
            Identifier: handleIdentifier,
            ExpressionStatement: handleExpressionStatement
        }
    };
};
