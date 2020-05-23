import React,{useState,useEffect} from 'react';
import PaddockField from "./paddockField/PaddockField"
import Introduction from "./Introduction";
import {connect} from "react-redux";
import {Description} from "./Description";

const Home=({user})=> {
    const [isLogin,setIsLogin]=useState(!!user)

    useEffect(()=>{
        setIsLogin(!!user)
    },[user])
    return (
      <div>
            <Introduction/>
            {isLogin&&<PaddockField/>}
          <Description/>
      </div>
    );
  }

const mapStateToProps = (state) => {
    const {user} =state.login
    return { user }
};

export default connect(mapStateToProps)(Home);
