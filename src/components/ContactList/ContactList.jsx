import React from 'react'
import ContactListItem from "./ContactListItem"
import PropTypes from "prop-types";


export default function ContactList({filter , contacts , onHandleRemoveTask }) {

    let filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    
        <ul>
          {filtredContacts.map(({id , name , number}) => {
            return (
                
            <ContactListItem 
              key = {id} 
              id={id}
              name={name}
              number ={number}
              onRemove={() => onHandleRemoveTask(id)}
              />
                
                
          );
       })}
     </ul>
       

  )
}


ContactList.defaultProps = {
  contacts: [],
  filter: "",
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
  onHandleRemoveTask: PropTypes.func.isRequired,
};