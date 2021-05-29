import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, detailsProduct, listProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

const AdminMainPage=(props)=>{

   
    const productList=useSelector(state=>state.productList);
    const {loading,error,product}=productList

   
    const dispatch= useDispatch();
   
    useEffect(() => {
       dispatch(listProduct())
  
    },[dispatch])
    const deleteProductHandler=(id)=>{
      if(id){
        dispatch(deleteProduct(id));
        if(dispatch(deleteProduct(id))){
          dispatch(listProduct())
        }
      }
      
      
      
  }

    const productEditor=(id)=>{
      dispatch(detailsProduct(id))

        props.history.push(`/adminpage/editproduct/${id}`)


    }
    
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
                <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name}/>
        </Link>
        <div className="card-body">
            <Link to={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <div className="price">Rs. {product.price}</div>
     </div>

     <div><button type="button" className="block b1" onClick={()=>productEditor(product._id)}>Edit</button></div>

     <div><button type="button" className="block b1" onClick={()=>deleteProductHandler(product._id)}>Delete</button></div>




    </div>
    ))
            }
          </div>
  
        }
      </div>
    )


}
export default AdminMainPage;