import React, {useState, useEffect, Fragment} from "react"
import Walker from "./Walker";
import ReactAnime from 'react-animejs'
import {connect} from "react-redux";
const {Anime} = ReactAnime

export const AnimataWaler=({keyframes})=> {
    console.log(keyframes)
    const [frames,setFrames]=useState([...keyframes])
    const style=frames[frames.length-1]
    const initialParams=[
        {
            targets: ".walker",
            keyframes: frames,
            easing:'spring',
            duration: 3500,
            loop: true
        }
    ]

    useEffect(()=>{
        setFrames(keyframes)
    },[keyframes])

    console.log("frames",frames)
    return (
        <Fragment>
        <Anime
            initial={initialParams}
        >
            <div className="walker" style={style}>walker</div>
        </Anime>
        </Fragment>
        )
}

/*
const mapStateToProps = (state) => {
    const { keyframes } = state.points
    return {keyframes}
};

export default connect(mapStateToProps)(AnimataWaler);

*/
