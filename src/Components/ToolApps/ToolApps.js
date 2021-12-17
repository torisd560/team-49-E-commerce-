import React from 'react';
import Calender from '../ToolApps/Calender/Calender'
import { Row, Col } from 'react-bootstrap'
import agroImg from '../../../src/images/agro.jpg'

const ToolApps = () => {
    return (
        <Row className = 'mt-5'>
            <Col xs={12} md={12} clasName = 'p-5'>
               <Calender></Calender>
          
            </Col>
                <Row  className = 'mt-4 text-center text-success p-0 mx-0'>
                    <Col xs={12} md={6}>
                        <div className='bg-white  rounded-3 px-2 py-4'>
                            <h6>CROP HEALTH</h6>
                            <h1>82%</h1>
                            <h6 className = 'fw-bold'>DIGITAL SOLID CARD</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='bg-white  rounded-3 px-2 py-4'>
                            <img src={agroImg} className=' img-fluid' style ={{width : '120px'}} alt="" />
                            <h6 className = 'fw-bold'>AGRO MART</h6>
                        </div>
                    </Col>
                </Row>
        </Row>
    );
};

export default ToolApps;