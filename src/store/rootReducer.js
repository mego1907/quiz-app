import { combineReducers } from "redux";
import examReducer from "./exam/examReducer";

const rootReducer = combineReducers({
  exam: examReducer
})

export default rootReducer;