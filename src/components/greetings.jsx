import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import fetchGreeting from '../redux/actions';

function Greeting({ fetchGreeting }) {
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <div>{greeting}</div>;
}

Greeting.propTypes = {
  fetchGreeting: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(null, mapDispatchToProps)(Greeting);
