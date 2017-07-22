/*jshint esversion: 6 */
import React from 'react';

const HeadLine = (props) => {
  return (
    <div key={props.title}>
      <h3 className="headline">
        {props.title}
      </h3>
      <hr></hr>
    </div>
  );
};

export default HeadLine;
