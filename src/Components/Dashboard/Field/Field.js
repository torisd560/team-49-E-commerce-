import React from 'react';
import './Field.css'
import { Button, Col, Row } from 'react-bootstrap';
import dashboardImg from '../../../images/dashboard.jpg'
import Dropdown from './Dropdown/Dropdown';
import girl from '../../../images/girl (2).png'

const Field = () => {
    return (
        <div className='bg-success m-0 rounded-3 text-white my-5 pb-5'>
            <img src={dashboardImg} className=' img-fluid p-2 rounded-3' alt="" />
            <Dropdown></Dropdown>
            <Row className='p-4'>
                <Col xs={12} md={6}>
                    <h5>Field Info</h5>
                    <p>Crop :--</p>
                    <p>Stage : --</p>
                    <p>Soil Health : 86%</p>
                </Col>
                <Col xs={12} md={6}>
                    <h5>Field incharge</h5>
                    <div className='d-flex dasboard-field '>
                        <img src={girl} className=' img-fluid' alt="" />
                        <img src={girl} className=' img-fluid' alt="" />
                        <img src={girl} className=' img-fluid' alt="" />
                    </div>
                    <Button className='manage-button'>MANAGE</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Field;