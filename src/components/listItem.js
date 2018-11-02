import React, { Component } from 'react';
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search, ModalContent } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
import ListItem from './listItem.js'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleClick =this.handleClick.bind(this)
  }
  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  handleClick(){
    console.log('clickity click')
  }


  render() {
    return (
      <div>
      <Modal.Header>{this.props.stock.quote.companyName}</Modal.Header>
        <Modal.Content>
          <Modal.Content>
          {this.props.stock.quote.symbol}
          </Modal.Content>
          <Modal.Content>
          CURRENT: ${this.props.stock.quote.latestPrice}
          </Modal.Content>
          <Modal.Content>
          OPEN: ${this.props.stock.quote.open}
          </Modal.Content>
          <Modal.Content>
          CLOSE: ${this.props.stock.quote.close}
          </Modal.Content>
          <Modal.Content>
          Volume: {this.props.stock.quote.latestVolume}
          </Modal.Content>
        </Modal.Content>
      </div>
    );
  }
}

export default ListView;