import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// running test that checks if he app component renders to the DOM without crashing 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
