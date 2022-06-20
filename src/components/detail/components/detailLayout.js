import React from 'react';
import PropTypes from 'prop-types';
import HandleError from '../../error/containers/handleError';

import './detail.styl';

function DetailLayout({ children }) {
  return (
    <HandleError>
      {children}
    </HandleError>
  );
}
DetailLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default DetailLayout;
