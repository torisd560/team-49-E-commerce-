import React from 'react';
import { Button, Col } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../redux/slices/productSlices'

const Product = ({ product }) => {
    const { img, product_name, price } = product
   const dispatch =useDispatch()

    return (
        <Col >
            <div className='text-center border border-1 border-warning p-3'>
                <img src={img} alt="" className=' img-fluid' style={{width : '300px', height : '300px'}} />
                <h5>{product_name}</h5>
                <h5>$ {price}</h5>
                <Button onClick ={() => dispatch(addToCart(product))} className = 'custom-button'>Add to Cart</Button>
            </div>
        </Col>

    );
};

export default Product;