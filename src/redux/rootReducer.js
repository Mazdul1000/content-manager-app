import { combineReducers } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { postReducer } from "./reducers/postReducer";

export const rootReducer = combineReducers({
    post: postReducer,
    filter: filterReducer
})