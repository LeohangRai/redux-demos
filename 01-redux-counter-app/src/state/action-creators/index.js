export function incrementCount(amount) {
  return (dispatch) => {
    dispatch({
      type: 'increment',
      payload: amount
    });
  };
}

export function decrementCount(amount) {
  return (dispatch) => {
    dispatch({
      type: 'decrement',
      payload: amount
    });
  };
}
