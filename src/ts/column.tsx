import * as React from 'react';

export const Column: React.SFC<void> = (props) => {
  return (
    <div {...props} className="column">
      {props.children}
    </div>
  );
};
