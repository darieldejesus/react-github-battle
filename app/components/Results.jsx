import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Player from './Player';
import { battlePlayers } from '../utils/api';

/**
 * This Component shows the Winner and Loser
 * along with their user information.
 */
class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      loser: null,
      winner: null
    };
  }

  /**
   * Fetches username info and update the component state.
   */
  async componentDidMount() {
    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
    const players = await battlePlayers([
      playerOneName,
      playerTwoName
    ]);

    if (players === null) {
      return this.setState(() => ({
        loading: false,
        error: 'Unable to start the battle. Make sure both users exists on GitHub.'
      }));
    }

    this.setState(() => ({
      error: null,
      loading: false,
      loser: players[1],
      winner: players[0]
    }));
  }

  render() {
    const { error, loading, winner, loser } = this.state;

    if (loading) {
      return (
        <Loading />
      )
    }

    if (error) {
      return (
        <div>
          <h1>{error}</h1>
          <Link
            className='reset'
            to='/battle'>
              Reset
            </Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}

export default Results;
