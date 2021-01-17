

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

const ShippingAddressScreen = (props) => {
    const userSignIn=useSelector(state=>state.userSignin)
    const {userInfo}=userSignIn
    if(!userInfo){
        props.history.push("/signin")
    }

    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
    const dispatch=useDispatch()
    const [fullName, setFullName] = useState(shippingAddress.fullName)
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)


    const submitShippingHandler=(event)=>{
        event.preventDefault();

        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}))

        props.history.push("/payment")
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>

            <form className="form" onSubmit={submitShippingHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>



                <div>
                    <lable htmlFor="Full Name">Full Name</lable>
                    <input type="text" id="FullName"
                        placeholder="Enter full name"
                        required
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}>
                    </input>
                </div>

                <div>
                    <lable htmlFor="Address">Address</lable>
                    <input type="text" id="address"
                        placeholder="Enter address"
                        required
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}>
                    </input>
                </div>

                <div>
                    <lable htmlFor="City">City</lable>
                    <input type="text" id="city"
                        placeholder="Enter city"
                        required
                        value={city}
                        onChange={(event) => setCity(event.target.value)}>
                    </input>
                </div>

                <div>
                    <lable htmlFor="Postal Code">Postal Code</lable>
                    <input type="text" id="postalCode"
                        placeholder="Enter postal code"
                        required
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}>
                    </input>
                </div>

                <div>
                    <lable htmlFor="Country">Country</lable>
                    <input type="text" id="country"
                        placeholder="Enter country"
                        required
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}>
                    </input>
                </div>

                <div>
                    <lable />
                    <button className="primary" type="submit">Continue</button>
                </div>

            </form>
        </div>
    )
}
export default ShippingAddressScreen