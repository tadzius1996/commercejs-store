import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import {commerce} from './lib/commerce'

const SingleProduct = () => {
    const {id} = useParams();
    const [products, setProducts] = useState({});

    const fetchProducts = async () => {
        const {data} = await commerce.products.retrieve(id);
        setProducts(data)
       console.log(products.id)
    }

    useEffect(() => {
        fetchProducts()
    },[])

  return (
    <>
    <div>singleProduct</div>
    <div>singleProduct</div>
    <div>singleProduct</div>
    <div>singleProduct</div>
    <div>singleProduct</div>
    <div>singleProduct</div>
    <p>heloooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
    <p>heloooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
    <p>heloooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
    <p>heloooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
    </>
  )
}

export default SingleProduct