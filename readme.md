# hexnut-handle

`hexnut-handle` is a <a href="https://github.com/francisrstokes/hexnut">hexnut</a> middleware for creating simple message and connection handlers. It can also be used with `hexnut-client`.

## Installing

```bash
npm i hexnut-handle
```

## Usage

### Handling a connection

*handle.connect(middlewareFunction)*

```javascript
const handle = require('hexnut-handle');

app.use(handle.connect(ctx => {
  ctx.send('Welcome!');
}));
```

### Handling a message

*handle.message(middlewareFunction)*

```javascript
const handle = require('hexnut-handle');

app.use(handle.message(ctx => {
  ctx.send(`You sent: ${ctx.message}`);
}));
```

### Handling a message with a specific format

*handle.matchMessage(messageRecogniserFunction, middlewareFunction)*

```javascript
const handle = require('hexnut-handle');

const messageRecogniser = msg => msg === 'Hello world';

app.use(handle.matchMessage(messageRecogniser, ctx => {
  ctx.send('Hello to you too!');
}));
```

### Handling a connection closing

*handle.closing(middlewareFunction)*

```javascript
const handle = require('hexnut-handle');

app.use(handle.closing(ctx => {
  // Do some cleanup here if necessary.
}));
```
