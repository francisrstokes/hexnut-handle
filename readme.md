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

### Handling a message with a specific format

*handle.message(messageRecogniserFunction, middlewareFunction)*

```javascript
const handle = require('hexnut-handle');

const messageRecogniser = msg => msg === 'Hello world';

app.use(handle.message(messageRecogniser, ctx => {
  ctx.send('Hello to you too!');
}));
```
