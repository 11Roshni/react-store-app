import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filter,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredproducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async()=>{
      try{
        const res=await axios.get(
          cat 
            ? `http://localhost:5001/api/products?category=${cat}` 
            : "http://localhost:5001/api/products"
          );
          setProducts(res.data);
      }catch(err){}
    };
    getProducts();
  },[cat]);
  useEffect(()=>{
    cat && 
    setFilteredProducts(
      products.filter((item)=>  
      Object.entries(filter).every(([key,value])=>
        item[key].includes(value)
      ))
    );
  },[products,cat,filter]);

  useEffect(()=>{
    if(sort==="Newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
        );
    }else if((sort==="asc")){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price-b.price)
        );
    }else{
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price-a.price)
        );
    }
  },[sort]);
  return (
    <Container>
      {cat
      ?filteredproducts.map((item) => <Product item={item} key={item.id} />)
      :products
        .slice(1,9)
        .map((item) => <Product item={item} key={item.id} />)}
      
    </Container>
  );
};

export default Products;
