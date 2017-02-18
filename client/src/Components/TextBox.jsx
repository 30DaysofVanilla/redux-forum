import React from 'react';

const TextBox = (props) => {

  let username, comment;

  return (
    <div>
      <form onSubmit={(e)=> { e.preventDefault(); props.handleSubmit({"author": username.value, "messageBody": comment.value})}} >
        <input placeholder="username..." type="text" ref={(input) => { username = input; }} />
        <textarea placeholder="Insert Comment Here..." ref={(input) => { comment = input; }}></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  )
}

export default TextBox;