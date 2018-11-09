import React, { Component } from 'react';
import { Menu, Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search, ModalContent } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
import ItemDetails from './ItemDetails.js'
import ItemCharts from './ItemCharts.js'
import ItemNews from './ItemNews.js'
import ItemPeers from './ItemPeers.js'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Current'
    }
    this.handleClick =this.handleClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  handleClick(){
    console.log('clickity click')

  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log(this.state)
  }

  render() {
    return (
      <div>
      <Modal.Header>{this.props.stock.quote.companyName} ({this.props.stock.quote.symbol})</Modal.Header>
        <Menu tabular>
        <Menu.Item name='Current' active={this.state.activeItem === 'Current'} onClick={this.handleItemClick} />
        <Menu.Item name='Charts' active={this.state.activeItem === 'Charts'} onClick={this.handleItemClick} />
        <Menu.Item name='News' active={this.state.activeItem === 'News'} onClick={this.handleItemClick} />
        <Menu.Item name='Peers' active={this.state.activeItem === 'Peers'} onClick={this.handleItemClick} />
      </Menu>
          {this.state.activeItem === 'Current'? <ItemDetails stock={this.props.stock}/> :this.state.activeItem === 'Peers'? <ItemPeers stock={this.props.stock}/>: this.state.activeItem === 'News'? <ItemNews stock={this.props.stock}/> : <ItemCharts stock={this.props.stock}/>}
         
        
      </div>
    );
  }
}

export default ListView;