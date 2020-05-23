import {  } from "./types";
import {ADD_POINT} from "./types";
import {REMOVE_POINT} from "./types";
import {SET_KEYFRAMES} from "./types";
import {GET_POINTS} from "./types";

const initialState = {
    points: [],
    keyframes:[]
};
export const pointReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            return { ...state, points: [...state.points, action.payload] }
        case REMOVE_POINT:
            const filtredPoints=state.points.filter(x=>x.id!=action.payload.id)
            return { ...state, points: filtredPoints };
        case GET_POINTS:
            return{...state}
        case SET_KEYFRAMES:
            return{...state,keyframes: action.payload}
        default:
            return state
    }
}
