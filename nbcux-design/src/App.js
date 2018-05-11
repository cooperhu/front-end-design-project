import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Header/>
        <Grid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
