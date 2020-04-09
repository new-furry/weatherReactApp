/**
 * App Reducers
 */
import { combineReducers } from "redux";

import MainReducer from "./mainReducer";


const reducers = combineReducers({
    mainState: MainReducer,
});

export default reducers;
