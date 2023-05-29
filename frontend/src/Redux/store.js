import { authReducer } from "./Auth/reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { transactionReducer } from "./Trasaction/reducer";

const rootReducer = combineReducers({ auth: authReducer, transaction: transactionReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
