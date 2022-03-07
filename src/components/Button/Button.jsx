import React from 'react';
import "./Button.scss";

const Button = (props) => {

  const { buttonText, buttonFunction } = props;

  return (
    <div>
      <button className="button" onClick={buttonFunction}>{buttonText}</button>
    </div>
  )
}

export default Button