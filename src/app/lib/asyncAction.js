class AsyncAction {
  constructor() {
    this.pendingAction = [];
  }

  wrapperAction(action) {
    return (dispatch) => {
      if (typeof window === 'undefined') {
        this.pendingAction.push(action);
      } else {
        dispatch(action());
      }
    }
  }

  async runActionOnServer(dispatch) {
    for (const action of this.pendingAction) {
      console.log("run action", action);
      await dispatch(action());
    }
  }
}

const asyncAction = new AsyncAction();

export default asyncAction;