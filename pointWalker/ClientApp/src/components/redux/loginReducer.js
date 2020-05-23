import {} from "./types";
import {SET_USER} from "./types";
import {RESET_USER} from "./types";

const initialState = {
    user:null
};
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user:action.payload}
        case RESET_USER:
            return { ...state, user:null };
        default:
            return state
    }
}
