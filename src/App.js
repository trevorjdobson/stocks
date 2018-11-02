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
      portfolio: ['ita', 'aaxn', 'amzn', 'dg'],
      data: []
    }
    this.addStock = this.addStock.bind(this)
  }


  componentDidMount() {
    let data = this.state.portfolio.toString()
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${data}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          console.log('listLoad', res.data)
          let list = [];
          for (var i in res.data) {
          let obj = res.data[i]

          list.push(obj)
          }
        console.log('dalkjfdsakjfldsafjlk', list)
        let newState = this.state;
        newState.data = list
        this.setState(newState)
        console.log('yoyo', this.state)
      });
  }
  componentDidUpdate(){
    
  }

  addStock(symbol){
    let newPortfolio = this.state.portfolio;
    newPortfolio.push(symbol);
    this.setState({ portfolio: [...this.state.portfolio, newPortfolio]});
    console.log('newlist state', this.state.portfolio)
    let data = this.state.portfolio.toString()
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${data}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          console.log('listLoad', res.data)
          let list = [];
          for (var i in res.data) {
          let obj = res.data[i]

          list.push(obj)
          }
        console.log('dalkjfdsakjfldsafjlk', list)
        let newState = this.state;
        newState.data = list
        this.setState(newState)
        console.log('yoyo', this.state)
      });
  }


  render() {
    return (
      <div className="App">
        <SearchView addStock={this.addStock}/>
        <ListView data={this.state.data}/>

      </div>
    );
  }
}

export default App;
