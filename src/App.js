import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import axios from 'axios'
import './App.css';
import Get from './scripts/stockData.js'

import SearchView from './components/search.js'
import ListView from './components/listView.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: ['ita', 'aaxn', 'amzn', 'dg']
    }
  }


  componentDidMount() {
    Get.singleStockChart('fb', '1d')
    Get.listLoad(this.state.portfolio)
    this.state.portfolio.map(item => Get.singleStockQuote(item))
    this.state.portfolio.map(item => Get.singleStockNews(item))
    this.state.portfolio.map(item => Get.singleStockPeers(item))
  }

  render() {
    return (
      <div className="App">
        <SearchView/>
        <ListView/>

      </div>
    );
  }
}

export default App;
