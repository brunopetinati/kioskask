import { NEXT_STEP, PREVIOUS_STEP, CLEAN_STEP } from "./action-types";

export const nextStep = (step) => ({
  type: NEXT_STEP,
  step,
});

export const previousStep = (step2) => ({
  type: PREVIOUS_STEP,
  step2,
});


export const cleanStep = (step) => ({
  type: CLEAN_STEP,
  step,
});