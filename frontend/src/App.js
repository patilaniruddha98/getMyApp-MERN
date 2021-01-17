import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter, Link, Route} from "react-router-dom"
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SiginScreen from "./screens/SigninScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRouter from "./components/PrivateRoute";
import AdminUserListScreen from "./screens/AdminUserListScreen";
import AdminProductListScreen from "./screens/AdminProductListScreen"
import AdminOrderListScreen from "./screens/AdminOrderListScreen";


const App = () => {

  const cart=useSelector(state=>state.cart)
  const {cartItems}=cart

  const userSignin=useSelector(state=>state.userSignin)
  const {userInfo}=userSignin

  const dispatch=useDispatch();
  const signoutHandler=()=>{
    dispatch(signout())
  }

  return (

    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div >
            <Link className="brand" to="/">GetMyCart</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}

          
            </Link>
            {userInfo ? 
              <div className="dropdown">
              <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                  </li>
                
                <li>
                  <Link to="/orderhistory">Order History</Link> 
                </li>

                <li>
                  <Link to="/profile">User Profile</Link> 
                </li>

              </ul>
              </div>
              :
            <Link to="/signin">Sign In</Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin <i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/productlist">Product</Link></li>
                  <li><Link to="/orderlist">Orders</Link></li>
                  <li><Link to="/userlist">Users</Link></li>
                  
                </ul>


              </div>
            )}
          </div>


        </header>
        
        
        <main>
        <Route  path="/cart/:id?" component={CartScreen}></Route>
        <Route  path="/product/:id" component={ProductScreen}></Route>
        <Route  path="/signin" component={SiginScreen}></Route>
        <Route  path="/register" component={RegistrationScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/orders/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <PrivateRouter path="/profile" component={ProfileScreen}></PrivateRouter>
        <Route path="/userlist" component={AdminUserListScreen}></Route>
        <Route path="/productlist" component={AdminProductListScreen}></Route>
        <Route path="/orderlist" component={AdminOrderListScreen}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
        


        </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
      </BrowserRouter>
    

  );
}


export default App;
