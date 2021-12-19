import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

const Products = () => {

    const products = useSelector((state) => state.products.productList)


    return (
        <div>
            <Container>
                <h1 className = 'my-5 text-center '>Unmissed Products</h1>
                <Row xs={1} md={3} className="g-4 my-5">
                    {
                        products?.map(product => <Product product={product} key={product.id}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;