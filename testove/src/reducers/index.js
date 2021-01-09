import { combineReducers } from "redux";
import { alertReducer } from "./alert-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./user-reducer";

export default combineReducers({
  alertReducer: alertReducer,
  auth: authReducer,
  users: usersReducer,
});
