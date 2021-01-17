import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { userSignin } from "../actions/userActions";

import MessageBox from "../components/MessageBox";


const SiginScreen=(props)=>{
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    
    const redirect=props.location.search 
    ?  props.location.search.split("=")[1]
    :"/"

    const userSignIn=useSelector(state=>state.userSignin)
  const {userInfo , error}=userSignIn

    


    const submitHandler=(event)=>{
        event.preventDefault();
        dispatch(userSignin(email,password))
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history,redirect,userInfo])


    return(
        <div>
          <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Sign in</h1>
            </div>
            
            {error && <MessageBox varient="danger">{error}</MessageBox>}

            <div>
                <lable htmlFor="email">Email address</lable>
                <input type="email" id="email" 
                placeholder="Enter email" 
                required
                 onChange={(event)=>setEmail(event.target.value)}>

                 </input>
            </div>

            <div>
                <lable htmlFor="password">Password</lable>
                <input type="password" id="password" 
                placeholder="Enter password" 
                required
                 onChange={(event)=>setpassword(event.target.value)}>
                     
                 </input>
            </div>

            <div>
                <lable/>
                <button className="primary" type="submit">Sign In</button>
            </div>
            <div>
                <lable/>
                <div>
                    New Customer?{"  "}
                    <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                </div>
                
            </div>
        </form>
        </div>
        
    )
}
export default SiginScreen