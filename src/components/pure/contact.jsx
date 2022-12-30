import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact }) {
    return (
        <div>
            <h2>
                Nombre: {contact.name}
            </h2>
            <h2>
                Apellido: {contact.lastName}
            </h2>
            <h2>
                Email: {contact.mail}
            </h2>
            <h2>
                Conectado: {contact.conected ? 'Contacto en línea' : 'Contacto no disponible'}
            </h2>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
