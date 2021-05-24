import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET
     } from "../constants/productConstants"

export const productListReducer=(state={ loading:true, product:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{loading:true}

        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const productDetailReducer=(state={product:[],loading:true},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{loading:true}

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload

            }

        default:
            return state
    }

}

export const deleteProductReducer=(state={loading:true},action)=>{
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return{
                loading:true
            }
        case PRODUCT_DELETE_SUCCESS:
            return{
                loading:false,
                productid:action.payload
            }
        case PRODUCT_DELETE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state

    }
}

export const updateProductReducer=(state={loading:true},action)=>{
    switch(action.type){
        case PRODUCT_UPDATE_REQUEST:
            return{
                loading:true
            }
        case PRODUCT_UPDATE_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_UPDATE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case PRODUCT_UPDATE_RESET:
            return{}
        default:
            return state

    }

}