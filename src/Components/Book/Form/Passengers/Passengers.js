import React from 'react';
import { Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap';

const Passengers = () => {
    return (
        <div>
            <Form.Label className='input-level'>Passengers/travel class</Form.Label>
            <InputGroup className="input-field">
                <FormControl aria-label="Text input with dropdown button"/>

                    <DropdownButton
                        variant="outline-white"
                        id="input-group-dropdown-2"
                        align="center"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
            </InputGroup>
        </div>
    );
};

export default Passengers;