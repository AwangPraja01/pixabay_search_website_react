import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';

import React, {Component} from 'react';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Search/>
      </div>
    )
  }
}

export default App
