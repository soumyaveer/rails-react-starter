import React from 'react'
import PropTypes from 'prop-types'

const Welcome = props => (
  <div>Welcome to {props.name}!</div>
);

Welcome.defaultProps = {
  name: 'rails-react-starter'
};

Welcome.propTypes = {
  name: PropTypes.string
};

export default Welcome;
