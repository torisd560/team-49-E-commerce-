import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {removeFromCart} from '../../../redux/slices/productSlices'

const SingleCartItem = ({ product }) => {
    const { img, product_name, price, description } = product
    const dispatch = useDispatch();


    return (
        <div>
            <Col>
                <Card className=' p-2'>
                    <Card.Img variant="top" src={img} className=' img-fluid' style={{ width: '200px', height: '200px' }} />
                    <Card.Body>
                        <Card.Title className = 'custom-text-primary'> {product_name} </Card.Title>
                        <Card.Text className = 'lh-lg'>
                            {description.slice(0, 100)}.
                        </Card.Text>
                        <div className=' d-flex justify-content-between align-items-center'>
                            <Button  onClick={() => dispatch(removeFromCart(product.id))} className='custom-button rounded-pill'>Remove</Button>
                            <h6 className='custom-text-primary'> ${price}.00</h6>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCartItem;