import { clearLocalStorage, getLocalStorageItem, setLocalStorageItem } from "../../utils/localStorage";
import * as types from "./actionType";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  signupStatus: false,
  accountBalance: 0,
  auth: getLocalStorageItem("accessToken") || "",
  token: getLocalStorageItem("accessToken") || "",
};

export const authReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.ACCOUNT_LOADING:
      return { ...state, isLoading: true };
    case types.ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        signupStatus: false,
        errorMessage: payload,
      };
    case types.LOGIN_SUCCESS:
      setLocalStorageItem("accessToken", payload);
      return { ...state, isLoading: false, token: payload };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signupStatus: true };
    case types.ACCOUNT_LOGOUT:
      clearLocalStorage();
      return { ...state, isLoading: false, token: "", auth: "" };
    case types.CHECKBALANCE_REQUEST:
      return { ...state, isLoading: true };
    case types.CHECKBALANCE_SUCCESS:
      return { ...state, isLoading: false, accountBalance: payload };
    case types.CHECKBALANCE_FAILED:
      return { ...state, isError: true };
    default:
      return state;
  }
};
