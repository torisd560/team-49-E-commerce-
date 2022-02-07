import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import burgerImg from '../../images/burger.jpg'

const Attachment = () => {

    const [burgerData, setBurgerData] = useState({})
    const { user } = useAuth();

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBurgerData = { ...burgerData };
        newBurgerData[field] = value;
        setBurgerData(newBurgerData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(burgerData)
    }
    return (
        <Row xs={12} md={2} className='mx-0 my-5 d-flex align-items-center '>
            <Col className='text-center'>
                <img src={burgerImg} alt="" className='img-fluid' />
                <div className='mt-3'>
                    <h4 className='text-success'>The Real Burger</h4>
                    <h5 className='custom-text-warning'> Price : $ 15</h5>
                </div>
            </Col>
            <Col>
                <div className=' w-75 mx-auto shadow-lg px-5 py-2'>
                    <form onSubmit={handleSubmit} >
                        <h3 className='text-center custom-text-warning mt-5'>Place Order below</h3>
                        <div className="mb-3 my-5">
                            <input
                                onBlur={handleOnblur}
                                defaultValue={user.displayName}
                                placeholder='Name'
                                name="name"
                                type="text"
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <input
                                onBlur={handleOnblur}
                                defaultValue={user.email}
                                placeholder='Email'
                                name="email"
                                type="email"
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <input
                                onBlur={handleOnblur}
                                name="address"
                                placeholder="Address"
                                type="adrress"
                                className="form-control"
                                required />
                        </div>
                        <div className="mb-3">
                            <input
                                onBlur={handleOnblur}
                                name="item-price"
                                defaultValue={'15'}
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                onBlur={handleOnblur}
                                type="text"
                                name="item-name"
                                defaultValue={'The Real Burger'}
                                className="form-control"
                                required
                            />
                        </div>
                        <Button type="submit" variant="warning" className=" text-dark fw-600 mt-4">Order Now</Button>
                    </form>
                </div>
            </Col>
        </Row>
    );
};

export default Attachment;