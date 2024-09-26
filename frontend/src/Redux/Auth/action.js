import * as types from "./actionType";
import { axiosInstance } from "../../utils/axioxconfig";

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/users/login", creds);

    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    let errorMessage = "An unknown error occurred. Please try again later.";

    // Check if the error is a network error (ERR_NETWORK)
    if (error.code === "ERR_NETWORK") {
      errorMessage = "Network error: Unable to connect to the server. Please check your network or try again later.";
    }
    // Handle server-related issues (e.g., server not started yet)
    else if (error.response && error.response.status === 503) {
      errorMessage = "Server is not started yet. Please try again later.";
    }
    // Handle backend errors with custom messages
    else if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message; // Use error message from backend
    }
    // Catch other Axios errors like timeouts or client-side issues
    else if (error.message) {
      errorMessage = error.message; // Use general error message from Axios if available
    }

    // Always dispatch the error message, either from backend or the fallback
    dispatch({
      type: types.ACCOUNT_ERROR,
      payload: errorMessage,
    });

    // Reject the error so that other parts of the application (if needed) can handle it further
    return Promise.reject(errorMessage);
  }
};

export const signupAPI = (creds) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/users/signup", creds);
    dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.data });
  } catch (error) {
    let errorMessage = "An unknown error occurred. Please try again later.";

    // Check if the error is a network error (ERR_NETWORK)
    if (error.code === "ERR_NETWORK") {
      errorMessage = "Network error: Unable to connect to the server. Please check your network or try again later.";
    }
    // Handle server-related issues (e.g., server not started yet)
    else if (error.response && error.response.status === 503) {
      errorMessage = "Server is not started yet. Please try again later.";
    }
    // Handle backend errors with custom messages
    else if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message; // Use error message from backend
    }
    // Catch other Axios errors like timeouts or client-side issues
    else if (error.message) {
      errorMessage = error.message; // Use general error message from Axios if available
    }

    // Always dispatch the error message, either from backend or the fallback
    dispatch({
      type: types.ACCOUNT_ERROR,
      payload: errorMessage,
    });

    // Reject the error so that other parts of the application (if needed) can handle it further
    return Promise.reject(errorMessage);
  }
};

export const checkBalance = () => async (dispatch) => {
  dispatch({ type: types.CHECKBALANCE_REQUEST });
  try {
    const res = await axiosInstance.get("/users/");

    dispatch({ type: types.CHECKBALANCE_SUCCESS, payload: res.data.balanceAmount });
  } catch (error) {
    dispatch({ type: types.CHECKBALANCE_FAILED, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

export const logoutAPI = () => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOGOUT });
};
