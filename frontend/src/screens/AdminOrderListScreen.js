import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listOfOrder } from "../actions/orderAction"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"

const AdminOrderListScreen = () => {

    const orderList = useSelector(state => state.orderList)
    const { loading,orders, error } = orderList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listOfOrder())
    }, [dispatch])


    return (
        <div>
            {loading ?
                <LoadingBox></LoadingBox>
                :
                error ? <MessageBox varient="danger">{error}</MessageBox>
                    :
                    (   
                        <table className="table">
                            <thead>
                                <th>Order Id</th>
                                <th>Items</th>
                                <th>User Id</th>
                                <th>Payment Method</th>
                                <th>Item Price</th>
                                <th>Tax Price</th>
                                <th>Shipping Price</th>
                                <th>Total Price</th>  
                                <th>Created At</th>
                                <th>Updated At</th>
                            </thead>

                            <tbody>
                            {
                                    orders.map((orders) => (
                                        
                                        <tr key={orders._id}>
                                            <td>{orders._id}</td>
                                            <td>{orders.orderItems.map((orderItems)=>(<>{orderItems._id}<br/></>))}</td>
                                            <td>{orders.user}</td>
                                            <td>{orders.paymentMethod}</td>
                                            <td>{orders.itemsPrice}</td>
                                            <td>{orders.taxPrice}</td>
                                            <td>{orders.shippingPrice}</td>
                                            <td>{orders.totalPrice}</td>
                                            
                                            <td>{orders.createdAt}</td>
                                            <td>{orders.updatedAt}</td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>
                        
                    )}

        </div>
    )
}
export default AdminOrderListScreen