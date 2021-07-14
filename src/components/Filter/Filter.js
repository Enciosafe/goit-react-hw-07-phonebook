import React from "react";
import {connect} from "react-redux";
import contactsActions from './../../redux/contacts/contacts-actions'
import {contactsSelectors} from './../../redux/contacts'


const Filter = ({handlerFilter, filter}) => {
    return <>
        <p>Find contacts by name:</p>
        <input onChange={handlerFilter}
               type="text"
               value={filter}/></>
}

const mapStateToProps = state => ({
    filter: contactsSelectors.getFilter(state)
})
const mapDispatchToProps = dispatch => ({
    handlerFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)