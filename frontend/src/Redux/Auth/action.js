import * as types from "./actionType";
import { axiosInstance } from "../../utils/axioxconfig";

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/users/login", creds);

    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

export const signupAPI = (creds) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/users/signup", creds);
    dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

export const checkBalance = () => async (dispatch) => {
  dispatch({ type: types.CHECKBALANCE_REQUEST });
  try {
    const res = await axiosInstance.get("/users/");

    dispatch({ type: types.CHECKBALANCE_SUCCESS, payload: res.data.payload });
  } catch (error) {
    dispatch({ type: types.CHECKBALANCE_FAILED, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

export const logoutAPI = () => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOGOUT });
};
