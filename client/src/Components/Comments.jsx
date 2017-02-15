import React from 'react';
import Comment from './Comment.jsx';

const Comments = (props) => {
  //here we will receive an array of comments, and were going to dynamically make each comment Component
  let comment = props.comments.comments.map( (comment, i) => {
    return <Comment key={i} comment={comment} /> 
  });

  console.log("commentYo", comment)

  return (
    <div>
      {comment}
    </div>
  )
}

// Comments.defaultProps
export default Comments;