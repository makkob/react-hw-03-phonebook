import React from 'react'
import PropTypes from "prop-types";
import styles from './Filter.module.css'

export default function Filter({onChangeFilter}) {
  return (
    <>
     <p className={styles.pFilter}>Find contacts by name :</p>
        <label onChange={event => onChangeFilter(event.target.value)}>
          <input name="filter" />
        </label>
    </>
   
  )
}


Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};