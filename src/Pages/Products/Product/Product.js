import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { img, product_name, price } = product


    return (
        <Col >
            <div className='text-center border border-1 border-warning p-3'>
                <img src={img} alt="" className=' img-fluid' style={{width : '300px', height : '300px'}} />
                <h5>{product_name}</h5>
                <h5>$ {price}</h5>
                <Button className = 'custom-button'>Add to Cart</Button>
            </div>
        </Col>

    );
};

export default Product;