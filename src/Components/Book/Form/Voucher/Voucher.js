import React from 'react';
import { Form } from 'react-bootstrap';

const Voucher = () => {
    return (
        <div>
            <Form.Group className=" input-field" controlId="exampleForm.ControlInput1">
                <Form.Label className='input-level'>Voucher or event code</Form.Label>
                <Form.Control type="text" placeholder="Enter  Code" />
            </Form.Group>
        </div>
    );
};

export default Voucher;