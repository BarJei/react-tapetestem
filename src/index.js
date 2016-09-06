// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from 'components/Hello';

// ReactDOM.render(
//   <Hello />,
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from "react-dom";

// index.js that contains all elements/components
import App from 'components/Container';

const app = document.getElementById('app');
ReactDOM.render(<App />, app);