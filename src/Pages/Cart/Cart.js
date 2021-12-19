import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleCartItem from './SingleCartItem/SingleCartItem'

const Cart = () => {
    const cartList = useSelector((state) => state.products.cartList)

    return (
        <div>
            <Container>
                <h1 className = 'my-5 text-center custom-text-primary '>All your orders here!</h1>
                <Row xs={1} md={3} className="g-4 my-5">
                    {
                        cartList?.map(product => <SingleCartItem product={product} key={product.id} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cart;