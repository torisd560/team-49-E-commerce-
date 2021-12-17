import React from 'react';
import './Feed.css'
import { Col, Row } from 'react-bootstrap';
import weatherImg from '../../../images/weather.png'

const Feed = () => {
    return (
        <div className='mt-5'>
            <Row className='m-0 p-0 g-3' >
                <Col xs={12} md={6} className='mt-0'>
                    <div className='weather p-2 rounded-3 text-center '>
                        <p>CURRENT WEATHER</p>
                        <img src={weatherImg} className=' img-fluid' style={{ width: '60px' }} alt="" />
                        <h4>80<sup>o</sup> F</h4>
                        <h6>BRIGHT WINDY</h6>
                    </div>

                </Col>
                <Col xs={12} md={6} className='mt-0'>
                    <div className=' device p-2 rounded-3 text-center'>
                        <p>CONNECTED DEVICE</p>
                        <h3>6</h3>
                        <h6>4 IOT Sensor</h6>
                        <h6>1 Smart Tractor</h6>
                        <h6>1 Control System</h6>
                    </div>

                </Col>
                <Row className='g-3 m-0 p-0'>
                    <Col xs={12} md={12} >
                        <div className=' bg-success rounded-3 px-3 text-dark py-2'>
                            <h5 className=' text-white'>AGRONIMIST FEED</h5>
                            <div className=' bg-white rounded-3 d-flex justify-content-between p-1 px-4 mt-3'>
                                <div>
                                    <h6 className='text-danger fw-bold'>CRITICAL</h6>
                                    <p>Soil Moisture is low <br />Nitrogen is difficalt this section</p>
                                </div>
                                <div>
                                    <i class="fas fa-exclamation-triangle text-danger"></i>
                                </div>
                            </div>
                            <div className=' bg-white rounded-3 d-flex justify-content-between py-1  px-4 mt-3'>
                                <div>
                                    <h6 className='text-warning fw-bold'>IMPORTANT</h6>
                                    <p>Soil Moisture is low <br />Nitrogen is difficalt this section</p>
                                </div>
                                <div>
                                    <i class="fas fa-exclamation-circle text-warning"></i>
                                </div>
                            </div>
                            <p className='text-end mt-2 text-white'>PoweredBy senseLink AL</p>
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default Feed;