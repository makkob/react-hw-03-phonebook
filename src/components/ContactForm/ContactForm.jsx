
import React, { Component } from 'react'
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";




export default class ContactForm extends Component {
  state={
   name: '',
   number: '',
  }
  handleChange = evt => {
    let { name, value } = evt.target;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };
  handleSubmit = evt =>{
    let { name, number } = this.state;
    evt.preventDefault();
    this.props.addContact(name , number)
    this.setState({ name: '' , number: ''});
  }

  render() {

    
    let {name , number} = this.state
    return (
      
      <form onSubmit={this.handleSubmit}>
    
      <label >
       <p className={styles.inputTitle}>Name :</p>
        <input
         type="text"
         name="name"
         value={name}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
         required
         onChange={this.handleChange}
       />
       
       <p className={styles.inputTitle}>Number :</p>
       <input
         type="tel"
         name="number"
         value={number}
         pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
         title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
         required
         onChange={this.handleChange}
       />
      </label>
 
      <div className={styles.btnContact}>
       <button type="submit" >
         Add contact
       </button>
      </div>
   </form>

    )
  }
}

ContactForm.defaultProps = {
  name: "no name",
  number :"no number"
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

};

