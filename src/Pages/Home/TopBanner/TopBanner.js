import React from 'react';
import { Button } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className='top-banner my-2'>
           <div className = 'banner-items'>
           <h1>Antibacterial<br /> Mask & Sanitizer </h1>
            <h2 className='custom-text-primary mt-5'>$59.00</h2>
            <p className = 'lh-lg my-4 fs-5'>Tried of seeing deposable mask discared on floor? <br />
                Tell your Brand story through image.</p>
            <Button className='custom-button rounded-pill'>Shop Collection</Button>
           </div>
        </div>
    );
};

export default TopBanner;