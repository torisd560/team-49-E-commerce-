import React from 'react';
import { Form } from 'react-bootstrap';


const To = () => {
    return (
        <Form.Group className="input-field" controlId="exampleForm.ControlInput1">
            <Form.Label className='input-level'>To</Form.Label>
            <div className='input-icons'>
                <i className="fas fa-map-marker-alt icon"></i>
                <Form.Control type="text" placeholder="Select Destination" />
            </div>

        </Form.Group>
    );
};

export default To;