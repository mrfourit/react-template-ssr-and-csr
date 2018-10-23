const express = require('express');
const path = require('path');
const React  = require('react');
const { renderToString }  = require('react-dom/server');
const { StaticRouter }  = require('react-router');
const seoBot = require('seo-bot-detect');
const {ListRoute}  = require('../src/app/component/root.js');
const {template}  = require('./template.js');

const server = express();

server.use(express.static('assets'));

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
    res.sendFile(path.resolve('./index.html'));
  }
});

server.listen(9090, function() {
  console.log("Server running port 9090");
});