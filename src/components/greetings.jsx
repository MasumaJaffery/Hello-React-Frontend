import React, { useEffect } from 'react';
import fetchGreeting from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <div>{greeting}</div>;
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);