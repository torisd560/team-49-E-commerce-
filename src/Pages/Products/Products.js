import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={4} className="g-4 my-5">
                  {
                      products.map(product => <Product product = {product} key = {product.id}></Product>)
                  }
            </Row>
        </div>
    );
};

export default Products;