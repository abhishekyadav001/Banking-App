import * as types from "./actionType";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  totalpages: 1,
  transactionHistory: [],
};

export const transactionReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.TRANSACTION_REQUEST:
      return { ...state, isLoading: true };
    case types.TRANSACTION_SUCCESSFULL:
      return { ...state, isLoading: false };
    case types.TRANSACTION_FAILED:
      return { ...state, isError: true, errorMessage: payload.message };
    case types.TRANSACTION_HISTORY_REQUEST:
      return { ...state, isLoading: true };
    case types.TRANSACTION_HISTORY_SUCCESSFULLL:
      return { ...state, transactionHistory: payload.alltransactions, totalpages: payload.totalPages };
    case types.TRANSACTION_HISTORY_FAILED:
      return { ...state, isError: true, errorMessage: payload.message };
    default:
      return state;
  }
};
