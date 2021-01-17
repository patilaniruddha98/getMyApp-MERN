import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { listOrderMin } from "../actions/orderAction"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"

const OrderHistoryScreen=(props)=>{

    const orderMineList=useSelector(state=>state.orderMineList)
    const {loading, error ,orders}=orderMineList


    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listOrderMin())
    },[dispatch])

    return(
        <div>
            <h1>Order History</h1>
            {loading ?
             <LoadingBox></LoadingBox> :
             error ? <MessageBox></MessageBox>
             :
             (
                 <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=>(
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>
                                    <ul>
                                        {order.orderItems.map((myname)=>(
                                            <li>{myname.name}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>{order.totalPrice.toFixed(2)}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0,10):"No"}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0,10):"No"}</td>
                                <td>
                                    <button type="button" className="small"
                                    onClick={()=>{props.history.push(`/orders/${order._id}`)}}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
             )
            }
        </div>
    )
    
}

export default OrderHistoryScreen