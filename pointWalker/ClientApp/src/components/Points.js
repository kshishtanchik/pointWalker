import React from "react"
import {Point} from "./Point";
import {connect} from "react-redux";
import {removePoint} from "./redux/actions";

const Points=({points,user,removePoint})=>{
    console.log(points)
    return points.map(point=> <Point key={point.id} point={point} user={user} action={()=>point.id&&removePoint(point.id)}/>)
}
const mapStateToProps = (state) => {
    const { points } = state.points;
    const { user } = state.login;

    return { points,user };
};

const mapDispatchToProps = {
    removePoint
};
export default connect(mapStateToProps,mapDispatchToProps)(Points);
