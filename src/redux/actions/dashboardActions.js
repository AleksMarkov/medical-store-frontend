// src/actions/dashboardActions.js
import api from "../../services/api";
import { FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_ERROR } from "./types";

export const fetchDashboardData = () => async (dispatch) => {
  try {
    const response = await api.get("/dashboard");
    dispatch({ type: FETCH_DASHBOARD_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DASHBOARD_ERROR, payload: error.message });
  }
};
