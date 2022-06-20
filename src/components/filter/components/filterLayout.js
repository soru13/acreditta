import React from 'react';
import './filter.styl';
import PropTypes from 'prop-types';
import HandleError from '../../error/containers/handleError';

function FilterLayout({ children }) {
  return (
    <section className='filter'>
        <HandleError>
            {children}
        </HandleError>
    </section>
  );
}
FilterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default FilterLayout;
