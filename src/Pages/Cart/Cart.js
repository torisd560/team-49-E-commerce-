import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../Products/Product/Product';

const Cart = () => {
    const cartList = useSelector((state) => state.products.cartList)

    return (
        <div>
            <Row xs={1} md={4} className="g-4 my-5">
                {
                    cartList?.map(product => <Product product={product} key={product.id}></Product>)
                }
            </Row>
            <h1>This is cart</h1>
        </div>
    );
};

export default Cart;