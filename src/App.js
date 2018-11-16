import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon, Image } from 'semantic-ui-react';

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
      isEditing: false
    }
    this.addStock = this.addStock.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleMoveUp = this.handleMoveUp.bind(this)
    this.handleMoveDown = this.handleMoveDown.bind(this)
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

  toggleView(){
    if(this.state.isEditing === true){
    let newState = this.state
    newState.isEditing = false
    this.setState(newState)
    }else{
    let newState = this.state
    newState.isEditing = true
    this.setState(newState)
    }
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
  handleMoveUp(index){
    let newState = this.state
    if(index === 0){
      let element = newState.portfolio.shift()
      newState.portfolio.push(element)
      element = newState.data.shift()
      newState.data.push(element);
      this.setState(newState)
      localStorage.setItem('state', JSON.stringify(newState.portfolio))
    } else {
      let elementOne = newState.portfolio[index];
      let elementTwo = newState.portfolio[index-1];
      newState.portfolio[index-1] = elementOne;
      newState.portfolio[index] = elementTwo;
      elementOne = newState.data[index];
      elementTwo = newState.data[index-1];
      newState.data[index-1] = elementOne;
      newState.data[index] = elementTwo;
      this.setState(newState)
      localStorage.setItem('state', JSON.stringify(newState.portfolio))
    }
  }
  handleMoveDown(index){
    console.log(index)
    let newState = this.state
    if(index === newState.portfolio.length-1){
      let element = newState.portfolio.pop()
      newState.portfolio.unshift(element)
      element = newState.data.pop()
      newState.data.unshift(element);
      this.setState(newState)
      localStorage.setItem('state', JSON.stringify(newState.portfolio))
    } else {
      let elementOne = newState.portfolio[index];
      let elementTwo = newState.portfolio[index+1];
      newState.portfolio[index+1] = elementOne;
      newState.portfolio[index] = elementTwo;
      elementOne = newState.data[index];
      elementTwo = newState.data[index+1];
      newState.data[index+1] = elementOne;
      newState.data[index] = elementTwo;
      this.setState(newState)
      localStorage.setItem('state', JSON.stringify(newState.portfolio))
    }
  }

  render() {
    return (
      
      <div className="App" style={{
          margin: 'auto',
        }}>
        <div style={{marginBottom: '100px'}}>
      <Menu fixed='top' borderless size='small'  style={{backgroundColor: '#006494', marginBottom: '100px'}}>
      
      
      <Menu.Menu position='left'>
      <Menu.Item>
        <div>
        <SearchView addStock={this.addStock} />
        </div>
      </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right'>    
        <Menu.Item >  
          <Image circular size='mini'src='https://banner2.kisspng.com/20180424/rle/kisspng-stock-market-computer-icons-chart-stock-exchange-move-forward-5adf6082d95005.8565594015245886748901.jpg'></Image>          
        </Menu.Item>
      </Menu.Menu>
      
      </Menu>
      </div>
      <div >
        
        <ListView 
        
          handleDelete={this.handleDelete} 
          handleMoveUp={this.handleMoveUp}
          handleMoveDown={this.handleMoveDown}
          isEditing = {this.state.isEditing} 
          data={this.state.data}/>

      </div>
      <div style={{position: 'fixed', bottom: '5px', right: '5px'}}>
        {this.state.isEditing === false? 
          <Button circular item icon='edit' onClick={this.toggleView} style={{opacity:'.7'}}></Button>
          : <Button circular item icon='check' color='green' onClick={this.toggleView}></Button>
          }
      </div>
    </div>
    );
  }
}

export default App;
