import React from 'react';
import './list.styl';
import PropTypes from 'prop-types';
import HandleError from '../../error/containers/handleError';

function ListLayout({ children }) {
  return (
    <HandleError>
      <div className="react-container-grilla">
        {children}
      </div>
    </HandleError>
  );
}
ListLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ListLayout;
