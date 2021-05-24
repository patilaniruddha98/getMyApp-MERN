import Axios from "axios"
import {PRODUCT_UPDATE_REQUEST,PRODUCT_UPDATE_SUCCESS,PRODUCT_UPDATE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"


export const listProduct=()=>async(dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST
    })

    try{
        const {data}= await Axios.get("/api/product")
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})

    }
} 

export const detailsProduct=(productId)=>async (dispatch)=>{
    dispatch({
        type:PRODUCT_DETAILS_REQUEST,
        payload:productId
    })

    try{
        const {data}= await Axios.get(`/api/product/${productId}`)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }
}

export const deleteProduct=(productId)=>async(dispatch,getState)=>{
    dispatch({
        type:PRODUCT_DELETE_REQUEST,
        payload:productId
    })

    try{
        const {userSignin : {userInfo}}=getState();
        const {data} = await Axios.delete(`/api/product/${productId}`,
            {headers:{
            Authorization: `Bearer ${userInfo.token}`
            }
        }
        )
        dispatch({
            type:PRODUCT_DELETE_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
        type:PRODUCT_DELETE_FAIL,
        payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const updateProduct=(product)=>async(dispatch,getState)=>{
    dispatch({
        type:PRODUCT_UPDATE_REQUEST,
        payload:product
    })

    try{
        const {userSignin : {userInfo}}=getState();
        const {data} = await Axios.put(`/api/product/${product.productId}`,product,
            {headers:{
            Authorization: `Bearer ${userInfo.token}`
            }
        }
        )
        dispatch({
            type:PRODUCT_UPDATE_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
        type:PRODUCT_UPDATE_FAIL,
        payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}