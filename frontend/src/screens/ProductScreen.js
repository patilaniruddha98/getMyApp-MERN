import React, { useEffect, useState } from "react"

import Rating from "../components/Rating"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { detailsProduct } from "../actions/productActions"

const ProductScreen = (props) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id

    const [qty,setQty]=useState(1)






    const productDetails = useSelector((state) => state.productDetails)

    const { loading, error, product } = productDetails
    
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    const addToCartHandler=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }




    return (
        <div>

            {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox varient="danger">{error}</MessageBox> :
                <div>
                    <Link to="/">Back to Results</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={product.image} alt={product.name}></img>

                        </div>

                        <div className="col-1">

                            <ul>
                                <li><h1>{product.name}</h1></li>
                                <li><Rating rating={product.rating} numReviews={product.numReviews} /></li>
                                <li>Price: Rs.{product.price}</li>
                                <li>Description:<p>{product.decsription}</p> </li>
                            </ul>

                        </div>

                        <div className="col-1">

                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div> Price</div>
                                            <div> Rs. {product.price}</div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>{product.CountInStock > 0 ? <span className="success">In Stock</span> : <span className="danger">Unavailable</span>}</div>
                                        </div>
                                    </li>
                                    
                                    {
                                        product.CountInStock > 0 && (

                                            <>
                                            <li>
                                                <div className="row">
                                                <div>Qty</div>
                                                <div>
                                                    <select value={qty} onChange={(event)=>{setQty(event.target.value)}}>
                                                        {
                                                            [...Array(product.CountInStock).keys()].map(x=>(
                                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>

                                                </div>
                                            </li>
                                            <li><button className="primary block" onClick={addToCartHandler}>Add to Cart</button></li>
                                            </>
                                        )
                                    }

                                </ul>

                            </div>

                        </div>

                    </div>
                </div>

            }
        </div>

    )

}
export default ProductScreen