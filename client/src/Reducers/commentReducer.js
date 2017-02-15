//need actions here
import {COMMENTS_RECEIVED, COMMENTS_RECEIVED_ERR} from '../actions/getComments';
//initial State
const initialState = { comments: [] };

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case COMMENTS_RECEIVED:
    console.log("ASSIGN", Object.assign({}, state, { comments: state.comments.concat(action.payload) }))
      return Object.assign({}, state, { comments: state.comments.concat(action.payload) });
    case COMMENTS_RECEIVED_ERR:  
      console.log('Error getting new comments', action.payload);
      return state;
  }

  return state;
}