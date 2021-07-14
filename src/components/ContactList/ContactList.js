import React from "react";
import {connect} from "react-redux";
import {contactsOperations, contactsSelectors} from './../../redux/contacts'



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


const mapStateToProps = (state) => ({
 contacts: contactsSelectors.getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
    handlerDel: (id) => dispatch(contactsOperations.delContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)