import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page which only has a button which
 * anchors to the Battle section.
 */
class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends...and stuff.</h1>
        <Link to='/battle' className='button'>
          Battle
        </Link>
      </div>
    )
  }
}

export default Home;
