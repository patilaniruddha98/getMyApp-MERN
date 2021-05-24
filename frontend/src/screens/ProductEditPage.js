import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";


const ProductEditPage=(props)=>{

    const productId=props.match.params.id

    const productDetails = useSelector((state) => state.productDetails)

    const { loading, error, product } = productDetails

    const[name,setName]=useState("")
    const[category,setCategory]=useState("")
    const[price,setPrice]=useState("")
    const[count,setCount]=useState("")
    const[brand,setBrand]=useState("")
    const[rating,setRating]=useState("")
    const[description,setDescription]=useState("")
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!product){
            dispatch({type:PRODUCT_UPDATE_RESET})
            dispatch(detailsProduct(productId))

        }else{
            setName(product.name)
            setCategory(product.category)
            setPrice(product.price)
            setCount(product.CountInStock)
            setBrand(product.brand)
            setRating(product.rating)
            setDescription(product.description)
        }

    },[dispatch, product, productId])

    const submitHandler=(e)=>{
        e.preventDefault();
       dispatch(updateProduct({productId,name,category,price,count,brand,rating,description}))

    }

    return(


        <div>
        <form className="form" onSubmit={submitHandler}>
          
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox varient="danger">{error}</MessageBox>}

          <div>
              <lable htmlFor="name">Product Name</lable>
              <input type="text" id="name" 
              placeholder="Enter name" 
              value={name}
              required
               onChange={(event)=>setName(event.target.value)}>

               </input>
          </div>


          <div>
              <lable htmlFor="category">Category</lable>
              <input type="text" id="category" 
              placeholder="category" 
              value={category}
              required
               onChange={(event)=>setCategory(event.target.value)}>

               </input>
          </div>

          <div>
              <lable htmlFor="price">Price</lable>
              <input type="number" id="price" 
              placeholder="Enter price details" 
              value={price}
              required
               onChange={(event)=>setPrice(event.target.value)}>
                   
               </input>
          </div>
          <div>
              <lable htmlFor="count in stock">Count In Stock</lable>
              <input type="number" id="countInStock" 
              placeholder="Enter count of product" 
              value={count}
              required
               onChange={(event)=>setCount(event.target.value)}>
                   
               </input>
          </div>



          <div>
              <lable htmlFor="brand">brand</lable>
              <input type="text" id="brand" 
              placeholder="Enter brand name" 
              value={brand}
              required
               onChange={(event)=>setBrand(event.target.value)}>
                   
               </input>
          </div>



          <div>
              <lable htmlFor="rating">Rating</lable>
              <input type="number" id="rating" 
              placeholder="Enter rating details" 
              value={rating}
              required
               onChange={(event)=>setRating(event.target.value)}>
                   
               </input>
          </div>

          <div>
              <lable htmlFor="description">Description</lable>
              <input type="text" id="description" 
              placeholder="description" 
              value={description}
              required
               onChange={(event)=>setDescription(event.target.value)}>
                   
               </input>
          </div>

          <div>
              <lable/>
              <button className="block" type="submit">Update</button>
          </div>
          
      </form>
      </div>

    )

}
export default ProductEditPage;