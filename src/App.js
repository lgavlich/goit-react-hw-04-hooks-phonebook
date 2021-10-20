import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container/Container";
import Input from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import PhonebookList from "./components/PhonebookList/PhonebookList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmit = (data) => {
    console.log(data);
    const { contacts } = this.state;
    const added = contacts.some((contact) => contact.name === data.name);
    if (added) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const contactData = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contactData, ...contacts],
    }));
  };

  deleteList = (listId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== listId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Input onFormSubmit={this.formSubmit} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <PhonebookList
          contacts={visibleContacts}
          title="Contacts"
          onDeleteList={this.deleteList}
        />
      </Container>
    );
  }
}

export default App;
