import React from 'react';

import PropTypes from 'prop-types';

const ResetPlayerInputButton = ({ onClick }) => (
  <button className='reset' onClick={onClick}>
    Reset
  </button>
)

ResetPlayerInputButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ResetPlayerInputButton;
