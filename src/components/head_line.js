/*jshint esversion: 6 */
import React from 'react';
import withTheme from 'components/withTheme';

const HeadLine = (props) => {
  return (
    <div key={props.title}>
      <h3
        className="headline"
        style={{
          color: props.Theme.primary,
          border: props.noBorder ? 'none' : `7px solid ${props.Theme.black}`
        }}>
        {props.title}
      </h3>
      <hr style={{ color: props.Theme.primary }}/>
    </div>
  );
};

export default withTheme(HeadLine);
