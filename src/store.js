// src/store.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { dashboardReducer } from "./reducers/dashboardReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productsReducer } from "./reducers/productsReducer";
import { suppliersReducer } from "./reducers/suppliersReducer";
import { customersReducer } from "./reducers/customersReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  orders: orderReducer,
  products: productsReducer,
  suppliers: suppliersReducer,
  customers: customersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
