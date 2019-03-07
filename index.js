const connect = handler => (ctx, next) => {
  if (ctx.isConnection) {
    return handler(ctx, next);
  }
  return next();
};

const message = handler => (ctx, next) => {
  if (ctx.isMessage) {
    return handler(ctx, next);
  }
  return next();
};

const matchMessage = (handlerCheck, handler) => (ctx, next) => {
  if (typeof handlerCheck !== 'function') {
    throw new TypeError('Hexnut Handle Middleware: handlerCheck must be a function');
  }
  if (ctx.isMessage && handlerCheck(ctx.message)) {
    return handler(ctx, next);
  }
  return next();
};

const closing = handler => (ctx, next) => {
  if (ctx.isClosing) {
    return handler(ctx, next);
  }
  return next();
};

module.exports = {
  connect,
  message,
  matchMessage,
  closing
};
