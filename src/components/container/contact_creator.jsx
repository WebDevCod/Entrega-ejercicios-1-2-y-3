import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactCreatorComponent = () => {

    const defaultContact = new Contact('Pablo', 'Aquino', 'pablo@pablo.com', true);

    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>            
        </div>
    );
}

export default ContactCreatorComponent;
