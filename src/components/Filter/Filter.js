import React from "react";
import {connect} from "react-redux";
import contactsActions from './../../redux/contacts/contacts-actions'


const Filter = ({handlerFilter, filter}) => {
    return <>
        <p>Find contacts by name:</p>
        <input onChange={handlerFilter}
               type="text"
               value={filter}/></>
}

const mapStateToProps = state => ({
    filter: state.contacts.filter
})
const mapDispatchToProps = dispatch => ({
    handlerFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)