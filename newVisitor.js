var asyncFunctionVisitor = {
  CallExpression: function (path) {
    if (path.parent.type !== "AwaitExpression") {
      path.replaceWith(babel.types.awaitExpression(path.node));
    }
  },
  TaggedTemplateExpression: function (path) {
    if (path.parent.type !== "AwaitExpression") {
      path.replaceWith(babel.types.awaitExpression(path.node));
    }
  },
  Function: function (path) {
    path.skip();
  },
};

return {
  visitor: {
    Function: function (path) {
      if (path.node.async) {
        path.traverse(asyncFunctionVisitor);
      }
    },
  },
};
