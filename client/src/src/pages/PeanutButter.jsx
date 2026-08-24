import { products } from "../store/productSlice";
import { searchProducts } from "../store/searchProducts.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from 'react'
import {addToCart} from "../store/cartSlice.js";

function PeanutButter() {
  let {
    products : productList ,
    loading ,
    error
  } = useSelector((state) => state.products);
  let {
    search ,
    products: searchProductList = [],
  } = useSelector((state) => state.searchProducts);
  let dispatch  = useDispatch(); 
  useEffect(()=>{
      if(search) {
        dispatch(searchProducts(search));
      }
      else {
         dispatch(products("Peanut butter"));
      }
  },[search, dispatch]);
  if(loading){
    <h3>Loading.....</h3>
  }
  if (error) {
        return <h2>{error}</h2>;
  }
  return (
    <>
     {
    search
        ? (
        <>
           <div className="product-container">
     { 
      searchProductList?.map((product, index)=>(
        <div className="product-card" key={index}>
          <img src={product.image}/>
          <h3>{product.brand}</h3>
          <h4>{product.name}</h4><br/>
          <p>{product.description}</p>
          <div className="price"><p style={{ paddingTop : "8px"}}>₹{product.price}</p><button onClick={() =>dispatch(addToCart(product))}>Add</button></div>
        </div>
      ))
     }
    </div>
        </>)
        : (
          <>
           <div className="product-container">
     { 
      productList.map((product, index)=>(
        <div className="product-card" key={index}>
          <img src={product.image}/>
          <h3>{product.brand}</h3>
          <h4>{product.name}</h4><br/>
          <p>{product.description}</p>
          <div className="price"><p style={{ paddingTop : "8px"}}>₹{product.price}</p><button onClick={() =>dispatch(addToCart(product))}>Add</button></div>
        </div>
      ))
     }
    </div>
          </>
        )
      }
    </>
  )
}

export default PeanutButter