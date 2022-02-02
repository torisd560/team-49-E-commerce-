import React from 'react';
import './Form.css'
import FromDestination from './FromDestination/FormDestination'
import To from './To/To'
import DepatureAndReturn from './DepatureAndReturn/DepatureAndReturn'
import Passengers from './Passengers/Passengers'
import Voucher from './Voucher/Voucher'
import { Button } from 'react-bootstrap';

const Form = () => {
    return (
        <div className='bg-white py-5'>
            <form>
                <h1 className='form-title my-3 text-center'>Flight deals with Virgin Atlantic</h1>
                <div className='p-3'>
                    <div className='row mt-5'>
                        <div className="col-md-4">
                            <FromDestination />
                        </div>
                        <div className="col-md-4">
                            <To />
                        </div>
                        <div className="col-md-4">
                            <DepatureAndReturn />
                        </div>

                    </div>
                    <div className='row mt-4 d-flex align-items-end'>
                        <div className="col-md-4">
                            <Passengers />
                        </div>
                        <div className="col-md-4">
                            <Voucher />
                        </div>
                        <div className="col-md-4">
                            <Button type=" submit" variant="danger" className='w-100 px-5 py-2 fw-600 rounded-0'>Book Now</Button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;