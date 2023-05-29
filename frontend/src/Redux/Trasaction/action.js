import * as types from "./actionType";
import { axiosInstance } from "../../utils/axioxconfig";

export const depositAmount = (creds) => async (dispatch) => {
  dispatch({ type: types.TRANSACTION_REQUEST });
  try {
    if (creds.amount <= 0) {
      return Promise.reject("please enter a amount more than 0 Rs");
    }
    const res = await axiosInstance.post("/transaction", creds);

    dispatch({ type: types.TRANSACTION_SUCCESSFULL });
  } catch (error) {
    dispatch({ type: types.TRANSACTION_FAILED, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

// export const withdrawAmount = (creds) => async (dispatch) => {
//   dispatch({ type: types.ACCOUNT_LOADING });
//   try {
//     const res = await axiosInstance.post("/users/signup", creds);
//     dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.data });
//   } catch (error) {
//     dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
//     return Promise.reject(error.response.data.message);
//   }
// };

// export const logoutAPI = () => async (dispatch) => {
//   dispatch({ type: types.ACCOUNT_LOGOUT });
// };
