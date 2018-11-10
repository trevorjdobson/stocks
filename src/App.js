import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'semantic-ui-react';

import axios from 'axios'
import './App.css';
import Get from './scripts/stockData.js'

import SearchView from './components/search.js'
import ListView from './components/listView.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: ['googl', 'aapl', 'amzn', 'ibm', 'orcl'],
      data: [],
      view: 'live'
    }
    this.addStock = this.addStock.bind(this)
    this.moveView = this.moveView.bind(this)
    this.deleteView = this.deleteView.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  componentDidMount() {
    // Get.singleStockQuote('fb').then(res => (console.log('this is sparta', res)))
    if(!localStorage.getItem('state')){
    let data = this.state.portfolio.toString()
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${data}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          let list = [];
          for (var i in res.data) {
          let obj = res.data[i]
          list.push(obj)
          }
        let newState = this.state;
        newState.data = list
        this.setState(newState)
      });
  }else{
    console.log('the local state is', localStorage.getItem('state'))
    let portfolio = JSON.parse(localStorage.getItem('state'))
    let stocks = portfolio.toString()
    
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          let list = [];
          for (var i in res.data) {
          let obj = res.data[i]
          list.push(obj)
          }
        let newState = this.state;
        newState.data = list
        console.log(newState.portfolio)
        newState.portfolio = portfolio
        console.log(newState.portfolio)
        this.setState(newState)
      });
    
  }
  }
  componentDidUpdate(){
    
  }

  addStock(symbol){
      console.log(this.state.portfolio)
      let errCheck
      axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        .then(res => {
          errCheck = false
      }).catch(err => {
         errCheck = true
      }).then(res => {
        if(this.state.portfolio.includes(symbol)){
          alert('Your Portfolio Already Contains This Symbol')
        }else if(errCheck === true){
          alert('That Symbol Does Not Exist')
        }else{
          let newPortfolio = this.state;
          console.log('wtf',)
          newPortfolio.portfolio.push(symbol);
          
          this.setState(newPortfolio);
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
              localStorage.setItem('state', JSON.stringify(newPortfolio.portfolio))
              console.log('local storage', localStorage.getItem('state'))
            });
          }
      })
  }

  moveView(){
    let newState = this.state
    newState.view = 'move'
    this.setState(newState)
  }
  deleteView(){
    let newState = this.state
    newState.view = 'delete'
    this.setState(newState)
  }
  handleDelete(index){
    let newState = this.state
    let item = this.state.portfolio[index]
    newState.portfolio = this.state.portfolio.filter(i => {
      return i !== item
    })
    newState.data = this.state.data.filter(i => {
      return i.quote.symbol !== item.toUpperCase()
    })
    this.setState(newState)
    localStorage.setItem('state', JSON.stringify(newState.portfolio))
  }

  render() {
    return (
      
      <div className="App">
      <Menu fixed='top' borderless size='huge'  style={{backgroundColor: '#006494'}}>    
        <Menu.Item postion='left'>STK</Menu.Item> 
         <Menu.Menu position='right'>
          <Dropdown item icon='ellipsis vertical'>          
            <Dropdown.Menu >        
              <Dropdown.Item onClick={this.moveView}>Move Symbols</Dropdown.Item>
              <Dropdown.Item onClick={this.deleteView}>Delete Symbols</Dropdown.Item>         
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
        <SearchView addStock={this.addStock} />
        <ListView  handleDelete={this.handleDelete} view = {this.state.view} data={this.state.data}/>

      </div>
    );
  }
}

export default App;
