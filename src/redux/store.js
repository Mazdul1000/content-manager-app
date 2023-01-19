import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { sortPosts } from "./middlewares/sortPosts";
import { rootReducer } from "./rootReducer";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( thunk, /* sortPosts */))
)