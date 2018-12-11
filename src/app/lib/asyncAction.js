class AsyncAction {
  constructor() {
    this.pendingAction = [];
  }

  wrapperAction(action) {
    if (typeof window === 'undefined') {
      this.pendingAction.push(action);
    } else {
      action();
    }
  }

  async runActionOnServer(dispatch) {
    for (const action of this.pendingAction) {
      await action();
      console.log("AsyncAction.js lopp", (new Date()).getTime(), "-----------------", this.pendingAction.length);
    }

    this.pendingAction = [];
  }
}

const asyncAction = new AsyncAction();

export default asyncAction;