import React from 'react';
import PropTypes from 'prop-types';

/**
 * Show an username and its image.
 */
const PlayerPreview = ({ avatar, username, children }) => (
  <div className='column'>
    <img
      className='avatar'
      src={avatar}
      alt={`Avatar for ${username}`}
    />
    <h1>@{username}</h1>
    {children}
  </div>
)

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PlayerPreview;
