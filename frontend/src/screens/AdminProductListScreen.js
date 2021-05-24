import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import {listProduct} from "../actions/productActions"
import { Link } from "react-router-dom"




const AdminUserListScreen=()=>{


    const productList=useSelector(state=>state.productList)
    const{loading,error,product}=productList
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(listProduct())
    },[dispatch])



    return(
        <div>
        {loading ?
        <LoadingBox></LoadingBox>
        :
        error ? <MessageBox varient="danger">{error}</MessageBox>
        :
        (
            <table className="table">
            <thead>
                <th>Product Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Count</th>
                <th>Brand</th>
                <th>Number of Reviews</th>
                <th>Created At</th>
                <th>Updated At</th>
            </thead>

            <tbody>
               {product.map((product)=>(
                   <tr key={product._id}>
                        <td><Link to={`/product/${product._id}`}>{product._id}</Link></td>
                       <td>{product.name}</td>
                       <td>{product.image}</td>
                       <td>{product.price}</td>
                       <td>{product.category}</td>
                       <td>{product.CountInStock}</td>
                       <td>{product.brand}</td>
                       <td>{product.numReviews}</td>
                       <td>{product.createdAt.substring(0,10)}</td>
                       <td>{product.updatedAt.substring(0,10)}</td>
                       
                   </tr>
               ))}

            </tbody>

        </table>
        )}
       
        </div>
    )
}

export default AdminUserListScreen