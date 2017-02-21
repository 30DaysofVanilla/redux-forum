//need actions here
import {COMMENTS_RECEIVED, COMMENTS_RECEIVED_ERR, POST_COMMENTS, POST_COMMENTS_ERR} from '../actions/commentActions';
//initial State
const initialState = { comments: [] };

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case COMMENTS_RECEIVED:
      return Object.assign({}, state, { comments: state.comments.concat(action.payload) });
    case COMMENTS_RECEIVED_ERR:  
      console.log('Error getting new comments', action.payload);
      return state;
    case POST_COMMENTS:
      return Object.assign({}, state, { comments: state.comments.concat(action.payload) });
    case POST_COMMENTS_ERR:
      console.log('Error getting posting comments', action.payload);
      return state;
  }

  return state;
}