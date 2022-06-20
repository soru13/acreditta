import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilterLayout from '../components/filterLayout';

function Filter({handleEventClick}) {
  return (
    <FilterLayout>
        <Fragment>
            <button className='button' onClick={(name) => handleEventClick('characters')}>Personajes</button>
            <button className='button' onClick={(name) => handleEventClick('comics')}>Comics</button>
            <button className='button' onClick={(name) => handleEventClick('series')}>Series</button>
            <button className='button' onClick={(name) => handleEventClick('stories')}>Historias</button>
        </Fragment>
    </FilterLayout>
  );
}
Filter.propTypes = {
  val: PropTypes.string,
  handleEventClick: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  val: '',
};
export default Filter;
