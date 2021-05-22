import React from 'react';

export default props => {
  const {children, ...other} = props;

  return (
    <div>{React.cloneElement(children, other)}</div>
  )
};
