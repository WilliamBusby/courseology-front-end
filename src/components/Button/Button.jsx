import React from 'react';
import "./Button.scss";

const Button = (props) => {

  const { buttonText, type, buttonFunction } = props;

  return (
    <button className="button" type={type} onClick={buttonFunction} >{buttonText}</button>
  )
}

export default Button