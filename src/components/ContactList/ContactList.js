import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactList.module.css";

class Input extends Component {
  state = {
    name: "",
    number: "",
    id: uuidv4(),
  };
  inputValue = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addContact = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={s.Container}>
        <form className={s.form} onSubmit={this.addContact}>
          <label className={s.formItem}>
            Name{" "}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.inputValue}
            />
          </label>
          <label className={s.formItem}>
            Number{" "}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.inputValue}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Input;
