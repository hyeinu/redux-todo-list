import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';

import TodoApp from './TodoApp'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">ToDo!</h1>
          <TodoApp />
        </div>
      </MuiThemeProvider>
    )
  }
}
