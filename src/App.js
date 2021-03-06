import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import contactsOperations from './redux/contacts/contacts-operations'
import contactSelectors from './redux/contacts/contacts-selectors'





class App extends React.Component {


    componentDidMount() {
        this.props.fetchContacts()
    }

    render()
    {
        return <>
        <h1>Phonebook</h1>
            <ContactForm contacts={this.props.contacts}/>
            <h2>Contacts</h2>
            {this.props.contacts.length > 1 && <Filter/>}
            <ContactList/>
        </>
  }
}

const mapStateToProps = state => ({
    contacts: contactSelectors.getContacts(state),
    filter: contactSelectors.getFilter(state),
})


const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


App.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
            sex: PropTypes.string.isRequired
        })
    )
};


