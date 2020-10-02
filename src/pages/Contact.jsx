import React, { useState } from 'react';
import ContactLayout from 'components/contact/ContactLayout';
import MapCom from 'components/contact/Map';
import ContactCom from 'components/contact/Contact';

const Contact = () => {
    return (
        <ContactLayout>
            <ContactCom />
            <MapCom />
        </ContactLayout>
    )
}

export default Contact;
