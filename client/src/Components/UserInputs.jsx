import React from 'react';
import TextBox from './TextBox.jsx';

const UserInputs = (props) => {
  return (
    <div>
      <TextBox handleSubmit={props.handleSubmit}/>
    </div>
  )
}

export default UserInputs;