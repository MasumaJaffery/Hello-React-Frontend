export const FETCH_GREETING = 'FETCH_GREETING';

const fetchGreeting = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/api/greetings')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: FETCH_GREETING,
      payload: data.greeting,
    }));
};

export default fetchGreeting;