import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserProfile from './UserProfile';

/**
 * This "Component" shows the username
 * and its profile by <UserProfile />.
 */
const Player = ({ label, score, profile }) => (
  <div className='column'>
    <h1>{label}</h1>
    <h3>Score: {score}</h3>
    <UserProfile profile={profile} />
  </div>
)

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

export default Player;
