import React from 'react';

const Comment = (props) => {
  const {author, messageBody, createdAt} = props.comment;
  return (
    <div>
      {author} {messageBody} {createdAt}
    </div>
  )
}

export default Comment;