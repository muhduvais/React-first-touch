import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const newElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'Visit google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    newElement
);

