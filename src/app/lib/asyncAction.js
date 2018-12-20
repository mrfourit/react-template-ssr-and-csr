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

  async runActionOnServer() {
    for (const action of this.pendingAction) {
      await action();
    }

    this.pendingAction = [];
  }
}

const asyncAction = new AsyncAction();

export default asyncAction;