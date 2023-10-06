module.exports = function () {
  const identifierMappings = {
    onGod: 'true',
    noCap: 'true',
    cap: 'false',
    ghosted: 'return null',
    lowkey: 'console',
    stan: 'log',
    sus: 'warn',
    cringe: 'error',
    L: 'Error',
    yeet: 'throw',
    chill: 'setTimeout',
    spill: 'return',
    oof: 'console.error',
    finesse: 'filter',
    flex: 'console.assert',
    clout: 'Math.max',
    bop: 'Math.min',
    lit: 'true',
    slide: 'Array.push',
    bounce: 'Array.pop',
    squad: 'Array',
    clique: 'Object',
    hundoP: '100',
    swag: 'JSON.stringify',
    unswag: 'JSON.parse',
    gucci: 'Promise.resolve',
    busted: 'Promise.reject',
    snack: 'fetch',
    cash: 'parseInt',
    float: 'parseFloat',
    hype: 'addEventListener',
    killHype: 'removeEventListener',
  };

  const handleIdentifier = (path) => {
    const newName = identifierMappings[path.node.name];
    if (newName) {
      path.node.name = newName;
    }
  };

  const handleExpressionStatement = (path) => {
    const {node} = path;

    if (
      node.expression.type === 'CallExpression' &&
      node.expression.callee.name === 'yeet'
    ) {
      const errorArgument = node.expression.arguments[0];
      const throwStatement = {
        type: 'ThrowStatement',
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
