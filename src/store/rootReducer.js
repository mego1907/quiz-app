import { combineReducers } from "redux";
import examReducer from "./exam/examReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  // login: loginReducer,
  exam: examReducer
})

export default rootReducer;