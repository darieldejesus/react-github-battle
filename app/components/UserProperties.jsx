import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is the component to show the profile info.
 */
const UserProperties = ({ profile }) => (
  <ul className='space-list-items'>
    {profile.name && <li>{profile.name}</li>}
    {profile.location && <li>{profile.location}</li>}
    {profile.company && <li>{profile.company}</li>}
    <li><b>Followers:</b> {profile.followers}</li>
    <li><b>Following:</b> {profile.following}</li>
    <li><b>Public Repos:</b> {profile.public_repos}</li>
    {profile.blog && <li><a href={profile.blog}>{profile.blog}</a></li>}
  </ul>
)

UserProperties.propTypes = {
  profile: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string
  })
}

export default UserProperties;
