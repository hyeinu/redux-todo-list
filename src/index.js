import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers' //refers to a directory will look for index.js
import App from './components/App'

const store = createStore(reducers);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
