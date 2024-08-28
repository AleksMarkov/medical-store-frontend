// src/store.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { dashboardReducer } from "./reducers/dashboardReducer";
import { orderReducer } from "./reducers/orderReducer";
import authReducer from "./reducers/authReducer"; // Импорт authReducer

const rootReducer = combineReducers({
  auth: authReducer, // Добавить authReducer
  dashboard: dashboardReducer,
  orders: orderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
