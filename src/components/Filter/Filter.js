import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.filter}>
      <p className={s.title}>Find contacts by name </p>

      <input
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
