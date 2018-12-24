import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FormEl from './FormElement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormEl />
      </div>
    );
  }
}

export default App;
