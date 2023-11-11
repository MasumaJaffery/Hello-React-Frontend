const fetchGreeting = () => (dispatch) => {
  fetch('http://localhost:3000/api/greetings')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: 'FETCH_GREETING',
      payload: data.greeting,
    }));
};

export default fetchGreeting;