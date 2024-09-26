import * as types from "./actionType";
import { axiosInstance } from "../../utils/axioxconfig";

export const transactionAmount = (creds) => async (dispatch) => {
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

export const getTransactionHistory = (creds) => async (dispatch) => {
  const { page, limit } = creds;
  dispatch({ type: types.TRANSACTION_HISTORY_REQUEST });
  try {
    const res = await axiosInstance.get(`/transaction?page=${page}&limit=${limit}`);
    console.log(res);

    dispatch({ type: types.TRANSACTION_HISTORY_SUCCESSFULLL, payload: res.data });
  } catch (error) {
    dispatch({ type: types.TRANSACTION_HISTORY_FAILED, payload: error.message });
    return Promise.reject(error.message);
  }
};
