import React from 'react';
import PropTypes from 'prop-types';
import './select.styl';

function Select({ options, className, style }) {
  const itemOptions = [];
  options.forEach((item) => {
    itemOptions.push(
      <option value={item.value}>
        {item.label}
      </option>,
    );
  });
  const classStyle = `${className}`;
  return (
    <select className={classStyle} style={style}>
      {itemOptions}
    </select>
  );
}
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  style: PropTypes.string,
};
Select.defaultProps = {
  options: [],
  className: '',
  style: '',
};
export default Select;
