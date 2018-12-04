class AsyncAction {
  constructor() {
    this.pendingAction = [];
  }

  wrapperAction(action) {
    // return (dispatch) => {
    if (typeof window === 'undefined') {
      this.pendingAction.push(action);
    } else {
      action();
    }
    // }
  }

  async runActionOnServer(dispatch) {
    console.log("runActionOnServer asyncAction.js");
    for (const action of this.pendingAction) {
      console.log("ASYNC ACTION ON SERVER");
      await dispatch(action());
    }

    this.pendingAction = [];
  }
}

const asyncAction = new AsyncAction();

export default asyncAction;