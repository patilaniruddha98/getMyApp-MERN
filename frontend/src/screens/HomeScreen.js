import React, { useEffect, useMemo, useState} from "react"
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

  const [search,setSearch]=useState('')

  
  const product1=useMemo(()=>{
   
      if(!search)
      return product

    return product.filter(pro=>{
      return pro.name.toLowerCase().includes(search.toLowerCase())
    })
   
   

  },[product, search])


 


  return (
  
    <div>
    <div className="searchdiv">
   <input type="text" placeholder="Search" className="search" value={search} onChange={e=>setSearch(e.target.value)}/>

   </div>
      
      {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox varient="danger">{error}</MessageBox> :
        <div className="row center">
          {
            product1.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>

      }
    </div>
  )


}
export default HomeScreen