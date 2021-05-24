import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { cartReducers } from "./reducers/cartReducers";
import {orderCreateReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer} from "./reducers/orderCreateReducer"
import {deleteProductReducer, productDetailReducer, productListReducer, updateProductReducer} from "./reducers/productReducer"
import { detailsUserReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateReducer } from "./reducers/userReducers";



const initialState={
    cart:{
        cartItems:localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],

      shippingAddress:localStorage.getItem("shippingAddress")
        ? JSON.parse(localStorage.getItem("shippingAddress"))
        :{},

        paymentMethod:"PayPal"

    },
    userSignin:{
        userInfo:localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        :null,

        

    }
};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducers,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderMineList:orderMineListReducer,
    userDetails:detailsUserReducer,
    userUpdateProfile:userUpdateReducer,
    /*Admin*/
    userList:userListReducer,
    orderList:orderListReducer,
    deleteProduct:deleteProductReducer,
    updateProduct:updateProductReducer

})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store=createStore(reducer,initialState, composeEnhancers(applyMiddleware(thunk)))
export default store