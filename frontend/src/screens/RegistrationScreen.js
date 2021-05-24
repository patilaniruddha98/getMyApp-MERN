import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";

import MessageBox from "../components/MessageBox";


const RegistrationScreen=(props)=>{
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpassword,setConformpassword]=useState("")
    
    const redirect=props.location.search 
    ?  props.location.search.split("=")[1]
    :"/"

    const userRegister=useSelector(state=>state.userRegister)
  const {userInfo ,loading, error}=userRegister

    


    const submitHandler=(event)=>{
        event.preventDefault();
        if(password !== confirmpassword){
            alert("password and confirm password is not match")
        }else{
            dispatch(register(name,email,password))
        }
        
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
                <h1>Create an Account</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox varient="danger">{error}</MessageBox>}

            <div>
                <lable htmlFor="name">name</lable>
                <input type="text" id="name" 
                placeholder="Enter name" 
                required
                 onChange={(event)=>setName(event.target.value)}>

                 </input>
            </div>


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
                <lable htmlFor="Conform password">Conform Password</lable>
                <input type="password" id="Conformpassword" 
                placeholder="Enter Conform password" 
                required
                 onChange={(event)=>setConformpassword(event.target.value)}>
                     
                 </input>
            </div>

            <div>
                <lable/>
                <button className="block" type="submit">Register</button>
            </div>
            <div>
                <lable/>
                <div>
                    Already jave an account ?
                    <Link to={`/signin?redirect=${redirect}`}>Sign-In </Link>
                </div>
                
            </div>
        </form>
        </div>
        
    )
}
export default RegistrationScreen