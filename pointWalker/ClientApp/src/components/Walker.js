import React from "react"
import ReactAnime from 'react-animejs'
import {connect} from "react-redux";
const {Anime} = ReactAnime

const Walker=({keyframes})=> {
    const initialParams = [
        {
            targets: ".walker",
            keyframes,
            easing: 'spring',
            duration: 3500,
            loop: true
        }
    ]

    const style = keyframes[keyframes.length - 1]

    return (
        <Anime initial={initialParams}>
            <div className="walker" style={style}></div>
        </Anime>
    )
}


const mapStateToProps = (state) => {
    const { keyframes } = state.points
    return { keyframes }
};

export default connect(mapStateToProps)(Walker);
