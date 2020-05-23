import React, {useState, useEffect, Fragment} from 'react'
import {setUser,resetUser} from "./redux/actions";
import {connect} from "react-redux";

const Introduction=({user,setUser,resetUser})=> {
    const [currentUser,setCurrentUser]=useState(user)
    const registration=()=>{
        setUser(currentUser)
    }

    const regAction=<div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text">Ваше имя, пожалуйста:</span>
        </div>
        <input type="text" aria-label="First name" className="form-control" onChange={(e)=>setCurrentUser({name:e.target.value})}/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={registration}>Зарегистрироваться</button>
        </div>
    </div>

    const unRegAction=<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>resetUser()}>Выйти</button>
    const helloText=user?`Приятного пользования ${currentUser.name}!`:'Добро пожаловать!'
    const actions=user?unRegAction:regAction

    return    <Fragment>
        <h2 className="text-center">{helloText}</h2>
        {actions}
    </Fragment>
}

const mapStateToProps = (state) => {
    const { user } = state.login
    return { user}
};

const mapDispatchToProps = {
    setUser,
    resetUser
};

export default connect(mapStateToProps,mapDispatchToProps)(Introduction);
