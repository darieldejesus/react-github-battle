import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * An input field to specify an user for the battle.
 */
class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Keep the input value into the component state.
   */
  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({ username: value }));
  }

  /**
   * Send the specified username to
   * the parent function `onSubmit`
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render() {
    const { label } = this.props;
    const { username } = this.state;

    return (
      <form
        className='column'
        onSubmit={this.handleSubmit}>
        <label
          className='header'
          htmlFor='username'>
          {label}
        </label>
        <input
          name='username'
          type='text'
          autoComplete='off'
          placeholder='Github username'
          value={username}
          onChange={this.handleChange}/>
        <button
          className='button'
          type='submit'
          disabled={!username}>
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PlayerInput;
