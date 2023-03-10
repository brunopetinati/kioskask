import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'

// lembrar de deletar esse modulo se não usar
import thunk from "redux-thunk";

import stepReducer from './modules/step/reducer'
import gramsReducer from './modules/grams/reducer'
import paymentReducer from './modules/payment/reducer'


const reducers = combineReducers({
  step: stepReducer,
  payment: paymentReducer,
  grams: gramsReducer
});

const store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default store;