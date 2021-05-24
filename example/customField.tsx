import React from 'react';

function CustomComponent(props: RJForm.IProps): JSX.Element {
  const { name } = props;
  return (
    <div>{name}</div>
  );
}

export default [{
  name: 'customComponent',
  component: CustomComponent,
}];
