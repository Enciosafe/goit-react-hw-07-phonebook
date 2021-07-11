import React from "react";
import {connect} from "react-redux";
import contactsOperations from './../../redux/contacts/contacts-operations'



const ContactList = ({contacts, handlerDel}) => {
    return <div>
        <ul>
            {contacts.map(({ name, number, sex, id }) => (
                <li key={id}>{name}: {number} ({sex})
                    <button onClick={() => handlerDel(id)} type="submit" id={id}>delete</button>
                </li>
            ))}
        </ul>
    </div>
}


const getVisibleContacts = (allContacts, filter) => {
    const lowerFilter = filter.toLowerCase()

    return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerFilter))
}


const mapStateToProps = ({contacts: {contacts, filter}}) => ({
 contacts: getVisibleContacts(contacts, filter)
})

const mapDispatchToProps = dispatch => ({
    handlerDel: (id) => dispatch(contactsOperations.delContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)