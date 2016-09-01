import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';


import reducers from './reducers' //refers to a directory will look for index.js
import App from './components/App'

const store = createStore(reducers);

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
