import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Attachment from '../Attachment';

const AttachmentContainer = ({db}) => {
    return (
        <div>
            <Header />
            <Attachment db={db} />
            <Footer />
        </div>
    );
};

export default AttachmentContainer;