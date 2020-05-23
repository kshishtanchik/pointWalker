import {
    ADD_POINT,
    DISABLE_AINMATION,
    ENABLE_AINMATION,
    SET_KEYFRAMES,
    SET_USER,
    RESET_USER,
    REMOVE_POINT
} from "./types";

export function addPoint(point) {
    return { type: ADD_POINT,payload:point}
}

export function removePoint(id) {
    return {type:REMOVE_POINT,payload:id}
}

export function setKeyframes(keyframes) {
    return {type: SET_KEYFRAMES, payload: keyframes}
}

export function enableAnimation(){
    return {type:ENABLE_AINMATION}

}export function disableAnimation(){
    return {type:DISABLE_AINMATION}
}

export function setUser(user){
    return{type:SET_USER,payload:user}
}

export function resetUser(){
    return{type:RESET_USER,payload:null}
}
