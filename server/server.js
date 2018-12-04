import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import seoBot from 'seo-bot-detect';
import pug from 'pug';
import { Provider } from 'react-redux';
import configStore from '../src/app/store/index.js';
import { ListRoute } from '../src/app/component/root.js';
import asyncAction from '../src/app/lib/asyncAction';

const server = express();

server.use("/assets", express.static('./public/assets'));

server.get('*', (req, res) => {
  let appString = null,
    store = configStore();

  render(req, res);

  (async function () {
    await asyncAction.runActionOnServer(store.dispatch);
    console.log("Server.js call run action", (new Date).getTime());

    appString = render(req, res);

    if (seoBot(req)) {
      let pugCompile = pug.compileFile('template.pug');
      res.send(pugCompile({ appString: appString }));
    } else {
      res.sendFile(path.resolve('./public/index.html'));
    }
  }());
});

server.listen(9090, function () {
  console.log("Server running port 9090");
});

function render(req, res) {
  let context = {},
    store = configStore(),
    appString = null;

  appString = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <ListRoute />
      </StaticRouter>
    </Provider>
  );

  return appString;
}