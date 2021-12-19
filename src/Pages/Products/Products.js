import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

const Products = () => {

    const products = useSelector((state) => state.products.productList)


    return (
        <div>
            <Row xs={1} md={4} className="g-4 my-5">
                {
                    products?.map(product => <Product product={product} key={product.id}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;