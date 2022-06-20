import React from 'react';
import PropTypes from 'prop-types';
import './search.styl';

function Search({ val, handleChange }) {
  return (
    <div className="search">
      <input type="text" name="search" value={val} placeholder="Buscar nombre de Personaje" onChange={handleChange} minLength="2" required/>
    </div>
  );
}
Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  val: PropTypes.string,
};
Search.defaultProps = {
  val: '',
};
export default Search;
