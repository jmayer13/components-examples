import React, { Component } from 'react';
import {render} from 'react-dom';
import MarkdownField from './components/markdown-field.jsx';

class App extends Component {
  render(){
    return (
      <MarkdownField></MarkdownField>
    );
  }
}

render(<App />, document.getElementById('root'));