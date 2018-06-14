import React from 'react';
import PropTypes from 'prop-types';


const CustomBody = ({ message }) => {
  return <div>
    {JSON.stringify(message)}
  </div>;
};

CustomBody.propTypes = {
  message: PropTypes.object,
};

export default CustomBody;
