import React, {useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { savePaymentMethod } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

const PaymentMethodScreen=(props)=>{

    const userSignIn=useSelector(state=>state.userSignin)
    const {userInfo}=userSignIn
    if(!userInfo){
        props.history.push("/signin")
    }

    const [paymentMethod, setPaymentMethod]=useState("PayPal")
    const dispatch=useDispatch();
    const paymentMethodHandler=(event)=>{
        event.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        props.history.push("/placeorder")
        
    }
    return(

        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form class="form" onSubmit={paymentMethodHandler}>

            <div>
                <h1>Select Payment Method</h1>
            </div>

            <div>
                <div>
                    <input
                    type="radio"
                    id="paypal"
                    value="PayPal"
                    name="paymentMethod"
                    required
                    checked
                    onChnage={(event)=>setPaymentMethod(event.target.value)}>   
                    </input>
                    
                    <label htmlFor="paypal">PayPal</label>

                </div>
            </div>

            <div>
                <div>
                    <input
                    type="radio"
                    id="stripe"
                    value="Stripe"
                    name="paymentMethod"
                    required
                    onChnage={(event)=>setPaymentMethod(event.target.value)}>   
                    </input>
                    
                    <label htmlFor="stripe">Stripe</label>

                </div>
            </div>

                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>

            </form>

        </div>

    )

}
export default PaymentMethodScreen