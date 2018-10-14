const express = require('express');
const React  = require('react');
const { renderToString }  = require('react-dom/server');
const { StaticRouter }  = require('react-router');
const App  = require('../src/app/component/root.js');
const template  = require('./template');

const server = express();

server.get('/', (req, res) => {
  const context = {};

  const appString = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }));
});

server.listen(8080);