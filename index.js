module.exports = function (babel) {
    const { types } = babel;

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
    };

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
    
    /**
     * handle MemberExpression nodes to replace custom property accesses
     * @param {babel.NodePath} path - the current node path
     */
    const handleMemberExpression = (path) => {

        /**
         * place all custom mappings for members here
         * @example any object/array property such as array.prototype.push, etc
         * string.lowkey() will not replace console.log() lowkey
         */
        const memberExpressionMappings = {
            highkey: "toUpperCase",
            lowkey: "toLowerCase"
        }

        const newName = memberExpressionMappings[path.node.property.name];

        if (
            types.isMemberExpression(path.node) &&
            types.isIdentifier(path.node.property) &&
            newName
        ) {
            path.node.property.name = newName;
        }
    };

    return {
        visitor: {
            Identifier: handleIdentifier,
            ExpressionStatement: handleExpressionStatement,
            MemberExpression: handleMemberExpression
        },
    };
};
