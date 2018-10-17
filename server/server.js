const express = require('express');
const path = require('path');
const React  = require('react');
const { renderToString }  = require('react-dom/server');
const { StaticRouter }  = require('react-router');
const seoBot = require('seo-bot-detect');
const {ListRoute}  = require('../src/app/component/root.js');
const {template}  = require('./template.js');

const server = express();

server.get('*', (req, res) => {
  const context = {};

  const appString = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <ListRoute/>
    </StaticRouter>
  );

  if (seoBot(req)) {
    res.send(template({
      body: appString,
      title: 'Hello World from the server'
    }));
  } else {
    console.log(path.resolve('./build-client/index.html'));
    res.sendFile(path.resolve('./build-client/index.html'));
  }
});

server.listen(8080, function() {
  console.log("Server running port 8080");
});