import React from 'react'
import PropTypes from "prop-types";

export default function ContactListItem({id , name , number , onRemove}) {
  return (
  
    <li  key={id}>
     <span> {name} </span>
     <span> {number} </span>
     <button onClick={onRemove} type="button">
      Delete
      </button>
    </li>
    

  )
}



ContactListItem.defaultProps = {
  name: "no name",
  number: "no number",
  id: "no id"
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};