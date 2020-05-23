import {} from "./types";
import {DISABLE_AINMATION} from "./types";
import {ENABLE_AINMATION} from "./types";

const initialState = {
    canAnimate:false
};
export const animationReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISABLE_AINMATION:
            return { ...state, canAnimate:false }
        case ENABLE_AINMATION:
            return { ...state, canAnimate:true };
        default:
            return state
    }
}
