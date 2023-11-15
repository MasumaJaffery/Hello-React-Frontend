import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/slice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, status, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        <div>Error:</div>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default Greetings;
