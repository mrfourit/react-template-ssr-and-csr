import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import isBot from 'isbot';
import pug from 'pug';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import configStore from '../src/app/store/index.js';
import { ListRoute } from '../src/app/component/root.js';
import asyncAction from '../src/app/lib/asyncAction';
import routerServer from '../src/app/component/routerServer.js';

const server = express();

server.use("/assets", express.static('./public/assets'));

server.get('*', (req, res) => {
  if (isBot(req.headers['user-agent'])) {
    let appString = null,
      store = configStore(),
      pugCompile = null,
      helmet = null,
      htmlString = null;

    render(req, store);

    (async function () {
      await asyncAction.runActionOnServer();

      appString = render(req, store);

      pugCompile = pug.compileFile('template.pug');

      helmet = Helmet.renderStatic();

      htmlString = pugCompile({ appString: appString, helmet: helmet });

      res.send(htmlString);
    }());
  } else {
    res.sendFile(path.resolve('./public/index.html'));
  }
});

server.listen(9090, function () {
  console.log("Server running port 9090");
});

function render(req, store) {
  let context = {},
    appString = null;

  appString = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <ListRoute routerCommon={routerServer} />
      </StaticRouter>
    </Provider>
  );

  return appString;
}