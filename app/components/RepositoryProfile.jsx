import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Populate the main information about the repos.
 */
const RepositoryProfile = props => {
  const { position, image, name, url, login, stars } = props;
  return (
    <div className='popular-item'>
      <h5 className='popular-rank'>#{position + 1}</h5>
      <img 
        className='avatar' 
        src={image}
        alt={`Avatar for ${name}`} />
      <p><a href={url}>{name}</a></p>
      <p>@{login}</p>
      <p>{stars} stars</p>
    </div>
  )
}

RepositoryProfile.propTypes = {
  image: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default RepositoryProfile;
