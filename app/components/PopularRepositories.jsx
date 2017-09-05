import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepositoryProfile from './RepositoryProfile';

/**
 * Shows the popular repositories.
 */
const PopularRepositories = ({ repositories }) => (
  <div className='popular-items'>
    {repositories.map((repository, index) => (
      <RepositoryProfile 
        key={repository.name}
        position={index + 1}
        name={repository.name}
        url={repository.owner.html_url}
        image={repository.owner.avatar_url}
        login={repository.owner.login}
        stars={repository.stargazers_count}/>
    ))}
  </div>
)

PopularRepositories.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default PopularRepositories;
