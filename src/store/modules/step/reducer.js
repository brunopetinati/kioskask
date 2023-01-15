import { NEXT_STEP, PREVIOUS_STEP, CLEAN_STEP } from "./action-types";

const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case NEXT_STEP:

      const { step } = action;

      if(!step) {
        return state + 1
      }

      return state + step;

    case PREVIOUS_STEP:
      
      const { step2 } = action;

      if(!step2) {
        return state - 1
      }

      return state - step2;

    case CLEAN_STEP:
      return state = 0;

    default:
      return state;
  }
};

export default stepReducer;