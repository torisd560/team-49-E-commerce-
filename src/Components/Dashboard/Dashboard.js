import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Feed from './Feed/Feed';
import Field from './Field/Field';


const Dashboard = () => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <Field></Field>
            </Col>
            <Col xs={12} md={6}>
                <Feed></Feed>
            </Col>
        </Row>
    );
};

export default Dashboard;