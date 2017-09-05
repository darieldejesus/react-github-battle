import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

/**
 * A label which indicates the component
 * or process is loading (is in progress).
 */
class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  /**
   * Add `dots` t othe text and resert it and so on.
   */
  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }));
    }, speed);
  }

  /**
   * Clear the interval before unmount the component.
   */
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}

export default Loading;
