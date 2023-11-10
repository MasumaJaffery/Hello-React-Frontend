import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchGreeting from '../redux/actions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  if (greeting === undefined) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return <div>{greeting}</div>;
}

Greeting.propTypes = {
  greeting: PropTypes.string,
  fetchGreeting: PropTypes.func.isRequired,
};

Greeting.defaultProps = {
  greeting: '', // Provide a default value here
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
