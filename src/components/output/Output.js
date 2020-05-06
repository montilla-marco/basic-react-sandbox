import React from 'react';
import "./Output.css"

const Output = (props) => {
  return (
    <div className="Output">
      <p>
        Username: {props.userName}
      </p>
      <p>
        {props.p2}
      </p>
    </div>
  );
}

export default Output;