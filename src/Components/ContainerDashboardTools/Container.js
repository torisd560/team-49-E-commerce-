import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard'
import ToolApps from '../ToolApps/ToolApps'

const Container = () => {
    return (
        <div>
            <Row className='m-0 text-white p-5'>
                <Col xs={12} md={7}>
                    <h5>Dashboard</h5>
                    <Dashboard></Dashboard>
                </Col>
                <Col xs = {12} md = {1}></Col>
                <Col xs={12} md={4} className = 'm-0'>
                    <h5>Tools and Apps</h5>
                    <ToolApps></ToolApps>
                </Col>
            </Row>
        </div>
    );
};

export default Container;