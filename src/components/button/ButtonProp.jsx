import React from 'react';

function ButtonProp(props) {
  const buttonClassName = `btn ${props.isLast ? 'premiumBtn' : ''}`;
  return (
    <a href='#' className={buttonClassName}>
      {props.value}
    </a>
  );
}

export default ButtonProp;
