const express = require('express');
const path = require('path');
const React  = require('react');
const { renderToString }  = require('react-dom/server');
const { StaticRouter }  = require('react-router');
const seoBot = require('seo-bot-detect');
const {ListRoute}  = require('../src/app/component/root.js');
const {template}  = require('./template.js');

const server = express();

server.use("/assets", express.static('./public/assets'));

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
console.log("Check bot:", seoBot(req));
  if (seoBot(req)) {
    res.send(template({
      body: appString,
      title: 'Hello World from the server'
    }));
  } else {console.log("error");
    res.sendFile(path.resolve('./public/index.html'));
  }
});

server.listen(9090, function() {
  console.log("Server running port 9090");
});