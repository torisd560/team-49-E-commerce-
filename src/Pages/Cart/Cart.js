import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleCartItem from './SingleCartItem/SingleCartItem'

const Cart = () => {
    const cartList = useSelector((state) => state.products.cartList)

    return (
        <div>
            <Container>
                {cartList.length === 0 ?
                    <p className="text-center my-5">
                        Product Not added <br /> Please back to <Link to="/home">Home</Link> page and add product to cart.
                    </p>
                    :
                    <div>
                        <h1 className='my-5 text-center custom-text-primary '>All your orders here!</h1>
                        <Row xs={1} md={3} className="g-4 my-5">
                            {
                                cartList?.map(product => <SingleCartItem product={product} key={product.id} />)
                            }
                        </Row>
                    </div>
                }

            </Container>
        </div>
    );
};

export default Cart;