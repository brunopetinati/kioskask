import { ADD_GRAMS } from "./action-types";
import { REMOVE_GRAMS } from "./action-types";
import { CLEAR_GRAMS } from "./action-types";

const gramsReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_GRAMS:
      const { grams } = action;
      return state + grams;
    
    case REMOVE_GRAMS:

      const { removeGrams } = action;

      if(state > 0) { 
        return state - removeGrams; 
      }

    break;

    case CLEAR_GRAMS:
      return state = 0;

    default:
      return state;
  }
};

export default gramsReducer;