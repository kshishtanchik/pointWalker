import { combineReducers } from "redux";
import {pointReducer} from "./pointReducer"
import {animationReducer} from "./animationReducer";
import {loginReducer} from "./loginReducer";

export const rootReducer = combineReducers({
    points: pointReducer,
    animation:animationReducer,
    login:loginReducer
});
