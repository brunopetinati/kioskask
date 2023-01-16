import { ADD_GRAMS } from "./action-types";
import { REMOVE_GRAMS } from "./action-types";
import { CLEAR_GRAMS } from "./action-types";


export const addGrams = (grams) => ({
  type: ADD_GRAMS,
  grams,
});

export const removeGrams = (removeGrams) => ({
  type: REMOVE_GRAMS,
  removeGrams,
});

//TO DO: remover função caso não esteja sendo usada
export const zeroGrams = (gram) => ({
  type: CLEAR_GRAMS,
  gram,
});