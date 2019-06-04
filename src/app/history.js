let history = {};

if (typeof window !== 'undefined') {
  const createBrowserHistory = require("history").createBrowserHistory;

  history = createBrowserHistory()
}

export default history;