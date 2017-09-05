import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayerPreview from './PlayerPreview';
import UserProperties from './UserProperties';

/**
 * Shows the main properties of a username
 * including an image.
 */
const UserProfile = ({ profile }) => (
  <PlayerPreview
    username={profile.login}
    avatar={profile.avatar_url}>
    <UserProperties profile={profile} />
  </PlayerPreview>
)

UserProfile.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string
  })
}

export default UserProfile;
