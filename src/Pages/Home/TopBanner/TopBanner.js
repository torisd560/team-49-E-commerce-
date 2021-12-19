import React from 'react';
import { Button } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className='top-banner my-3'>
            <h1>Anti Virus Mask <br /> Get Free Shipping </h1>
            <h2 className='custom-text-warning mt-5'>$59.00</h2>
            <p className = 'lh-lg my-3 fs-5'>Tried of seeing deposable mask discared on floor? <br />
                Tell your Brand story through image.</p>
            <Button className='custom-button'>Shop Collection</Button>
        </div>
    );
};

export default TopBanner;