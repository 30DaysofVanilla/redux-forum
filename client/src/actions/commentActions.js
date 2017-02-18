export const COMMENTS_RECEIVED = 'GET_COMMENTS';
export const COMMENTS_RECEIVED_ERR = 'GET_COMMENTS_ERR';

export const POST_COMMENTS = 'POST_COMMENTS';
export const POST_COMMENTS_ERR = 'POST_COMMENTS_ERR';


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


export function postComments(comment) {
  console.log("postComment", comment)
  const query = fetch('http://localhost:8080/api/messages/post', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(comment)
  });

  // //update the state with the most recent posted comment
  return {
    type: POST_COMMENTS,
    payload: comment
  }

}
