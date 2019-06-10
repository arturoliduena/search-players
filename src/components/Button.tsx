import React from 'react';

interface Props {
  onClick: () => void;
}
const Button: React.FC<Props> = props => {
  return (
    <button className="button" type="button" onClick={props.onClick}>
      <span className="button-label">Search</span>
    </button>
  )
}

export default Button;