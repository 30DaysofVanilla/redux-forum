export const COMMENTS_RECEIVED = 'GET_COMMENTS';
export const COMMENTS_RECEIVED_ERR = 'GET_COMMENTS_ERR';

export function getComments() {
  const query = fetch('http://localhost:8080/api');

  // fetch('http://localhost:8080/api').then(function(response) {
  //   return response.json();
  // }).then(function(j) {
  //   console.log("yoooo", j)
  // });

  return (dispatch) => {
    query
      .then(messages => {
        
        dispatch({
          type: COMMENTS_RECEIVED,
          payload: messages.json()
        })
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: COMMENTS_RECEIVED_ERR,
          payload: err
        })
      })
  }
}
