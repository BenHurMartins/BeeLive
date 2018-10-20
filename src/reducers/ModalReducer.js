const INITIAL_STATE = {
    showDataModal: false
  };
  
//   import * as types from "../actions/types";
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    //   case types.TOGGLE_WELCOME_MODAL:
    //     return { ...state, showWelcomeModal: !state.showWelcomeModal };
      default:
        return state;
    }
  };
  