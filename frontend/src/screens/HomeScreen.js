import React, { useEffect } from "react"
import Product from "../components/Product"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import {useDispatch, useSelector} from "react-redux"
import { listProduct } from "../actions/productActions"

const HomeScreen = () => {
  const dispatch= useDispatch();
  const productList=useSelector(state=>state.productList);
  const {loading,error,product}=productList

  useEffect(() => {
    const fetchData = async () => {
     dispatch(listProduct())

    };
    fetchData()

  },[dispatch])

  return (
    <div>

      {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox varient="danger">{error}</MessageBox> :
        <div className="row center">
          {
            product.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>

      }
    </div>
  )


}
export default HomeScreen