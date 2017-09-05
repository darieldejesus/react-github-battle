import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import ResetPlayerInputButton from './ResetPlayerInputButton';

/**
 * Battle component to handle battle
 * between two players (github usernames).
 */
class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  /**
   * Get the username and update the component state.
   */
  handleSubmit(id, username) {
    this.setState(() => ({
      [id + 'Name']: username,
      [id + 'Image']: `https://github.com/${username}.png?size=200`
    }));
  }

  /**
   * Reset the component state by the input id.
   */
  handleReset(id) {
    this.setState(() => ({
      [id + 'Name']: '',
      [id + 'Image']: null
    }));
  }

  render () {
    const {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage
    } = this.state;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview
              username={playerOneName}
              avatar={playerOneImage}>
              <ResetPlayerInputButton
                onClick={() => this.handleReset('playerOne')} />
            </PlayerPreview>}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&
            <PlayerPreview
              username={playerTwoName}
              avatar={playerTwoImage}>
              <ResetPlayerInputButton
                onClick={() => this.handleReset('playerTwo')} />
            </PlayerPreview>}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
              pathname: '/battle/results',
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}>
            Start the battle!
          </Link>}
      </div>
    )
  }
}

export default Battle;
