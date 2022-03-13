import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlide";
import bookReducer from "../features/todoSlide/todoSlide"
const rootReducer = combineReducers({
    books: bookReducer,
    auths: authReducer
});
export default rootReducer;