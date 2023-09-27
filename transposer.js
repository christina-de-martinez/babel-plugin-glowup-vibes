module.exports = function (babel) {
    const { types: t } = babel;

    return {
        visitor: {
            Identifier(path) {
                if (path.node.name === "onGod" || path.node.name === "noCap") {
                    path.node.name = "true";
                }
                if (path.node.name === "cap") {
                    path.node.name = "false";
                }
                if (path.node.name === "ghosted") {
                    path.node.name = "return null";
                }
                if (path.node.name === "lowkey") {
                    path.node.name = "console";
                }
                if (path.node.name === "stan") {
                    path.node.name = "log";
                }
                if (path.node.name === "sus") {
                    path.node.name = "warn";
                }
                if (path.node.name === "cringe") {
                    path.node.name = "error";
                }
                if (path.node.name === "L") {
                    path.node.name = "Error";
                }
            },
            // todo
            NewExpression(path) {
                console.log("visiting", path);
            },
            // todo
            FunctionDeclaration(path) {
                console.log("...", path.node.id.name);
                if (path.node.id.name === "doSomething") {
                    path.node.id.name = "___doSomething";
                }
            },
            // yeet("message") -> throw new Error("message")
            ExpressionStatement(path) {
                const { node } = path;

                if (
                    node.expression.type === "CallExpression" &&
                    node.expression.callee.name === "yeet"
                ) {
                    const errorArgument = node.expression.arguments[0];

                    const throwStatement = {
                        type: "ThrowStatement",
                        argument: {
                            type: "NewExpression",
                            callee: {
                                type: "Identifier",
                                name: "Error",
                            },
                            arguments: [errorArgument],
                        },
                    };

                    path.replaceWith(throwStatement);
                }
            },
        },
    };
};
