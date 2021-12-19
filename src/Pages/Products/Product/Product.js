import React from 'react';
import './Product.css'
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/productSlices'

const Product = ({ product }) => {
    const { img, product_name, price } = product
    const dispatch = useDispatch()

    return (
        <Col>
            <Card className='text-center p-4'>
                <Card.Img variant="top" src={img} className=' img-fluid mx-auto' style={{ width: '200px', height: '200px' }} />
                <Card.Title > {product_name} </Card.Title>
                <div>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                </div>
                <Card.Body>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <i onClick={() => dispatch(addToCart(product))} className="fas fa-cart-plus custom-cursor custom-text-primary fs-4"></i>
                        <h6 className='custom-text-primary'> ${price}.00</h6>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Product;