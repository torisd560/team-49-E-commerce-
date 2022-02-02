import React from 'react';
import { Form } from 'react-bootstrap';


const FromDestination = () => {
    return (
        <div>
            <Form.Group className="input-field" controlId="exampleForm.ControlInput1">
                <Form.Label className='input-level'>From</Form.Label>
                <div className='input-icons'>
                    <i className="fas fa-map-marker-alt icon"></i>
                    <Form.Control type="text" placeholder="Select Departure" />
                </div>

            </Form.Group>

        </div>
    );
};

export default FromDestination;