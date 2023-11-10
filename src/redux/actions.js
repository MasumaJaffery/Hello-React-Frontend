const fetchGreeting = () => (dispatch) => {
  console.log('Fetching greeting...');
  fetch('http://localhost:3000/api/greetings')
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);
      dispatch({
        type: 'FETCH_GREETING',
        payload: data.greeting,
      });
    })
    .catch((error) => {
      console.error('Error fetching greeting:', error);
    });
};

export default fetchGreeting;
