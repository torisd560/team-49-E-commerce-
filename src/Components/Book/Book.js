import React from 'react';
import Form from '../Book/Form/Form'
import './Book.css'
const Book = () => {
    return (
        <div className='form-bg py-5'>
            <div className="row m-0 p-0">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <Form />
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default Book;