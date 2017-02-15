import React from 'react';

const TextBox = () => {
  return (
    <div>
      <form>
        <textarea placeholder="Insert Comment Here..."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default TextBox;