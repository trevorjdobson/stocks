import React, { Component } from 'react';
import { Menu, Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search, ModalContent } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
import ListItem from './listItem.js'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peers: []
    }
    
  }
  componentDidMount(){
    Get.singleStockPeers(this.props.stock.quote.symbol).then(res => {
      let data = res.data.toString();
      Get.listLoad(data)
        .then(res => {
          let newState = this.state
          newState.peers = res
          this.setState(newState)
        })
    })
  }

  componentDidUpdate(){

  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {this.state.peers.map((stock, i) => {
            return (
              <List.Item>
                <List.Content>
                <List.Content floated ='left'>
                  <List.Header floated='left' >{stock.quote.symbol}</List.Header>
                  <List.Description>{stock.quote.companyName}</List.Description>
                </List.Content >
                <List.Content floated='right'>
                  <List.Header floated='right'>{stock.quote.latestPrice}</List.Header>
                </List.Content>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
        
      </div>
    );
  }
}

export default ListView;