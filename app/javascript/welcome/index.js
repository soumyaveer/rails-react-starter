import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome name="rails-react-starter" />,
    document.body.appendChild(document.createElement('div')),
  );
});
