import React, { PropTypes } from 'react';
import { Header } from 'stardust';

const App = (props) => {
  return (
    <div>
    <Header as='h1'>Now Dashboard</Header>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
