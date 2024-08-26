// src/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Corrected import for thunk
import { dashboardReducer } from "./reducers/dashboardReducer"; // Import your dashboard reducer

const rootReducer = combineReducers({
  dashboard: dashboardReducer, // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
