import React from 'react';
import "./Button.scss";

const Button = (props) => {

  const { buttonText, type } = props;

  return (
    <button className="button" type={type} >{buttonText}</button>
  )
}

export default Button