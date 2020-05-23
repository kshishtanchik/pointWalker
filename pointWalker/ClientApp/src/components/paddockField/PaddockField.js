import React,{useState,useEffect} from 'react'
import { connect } from "react-redux"
import {addPoint,setKeyframes,disableAnimation,enableAnimation} from "../redux/actions"
import Points from "../Points";
import Walker from "../Walker";
import {useSignalR} from "../redux/signalR.hook";

const PaddockField =({addPoint,points,setKeyframes,disableAnimation,enableAnimation,canAnimate,keyframes})=>{
    const [marks,setMarks]=useState([...points])
    const addNewPoints=({xPos,yPos})=>{
        addPoint({xPos,yPos})
    }

    const {sendMessageToAll}=useSignalR(addNewPoints)

    useEffect(()=>{
        disableAnimation()
        setMarks([...points])
    },[points])

    useEffect(()=>{
        const keyframes=createFrames(marks)
        setKeyframes(keyframes)
    },[marks])

    useEffect(()=>{
        if(points.length>1)
            enableAnimation()
    },[keyframes])

    const createFrames=pointArray=> {
        if (!pointArray) return []
        const frames = pointArray.map(item => {
            return {left: item.xPos, top: item.yPos}
        })
        const first = frames.shift()
        frames.push(first)
        return frames
    }

    const setPointHandler=e=> {
        const {clientX, clientY} = e
        sendMessageToAll({xPos: clientX, yPos: clientY})
       // sendMessage({xPos: clientX, yPos: clientY})
    }

    return (
        <div onClick={setPointHandler} className="paddrock-field">
            <Points/>
            {canAnimate&&<Walker/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    const { points,keyframes } = state.points
    const {canAnimate} =state.animation
    return { points,keyframes,canAnimate }
};

const mapDispatchToProps = {
    addPoint,
    setKeyframes,
    disableAnimation,
    enableAnimation
};

export default connect(mapStateToProps,mapDispatchToProps)(PaddockField);
