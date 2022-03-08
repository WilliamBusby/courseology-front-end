import React from 'react';
import "./Button.scss";

const Button = (props) => {

  const { buttonText } = props;

  const preventDefault = (event) => {
    event.preventDefault();
  }

  return (
    <button className="button" onClick={preventDefault}>{buttonText}</button>
  )
}

export default Button