import React, { Component } from 'react';
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search } from 'semantic-ui-react'
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
      <Segment inverted>
        <List divided inverted relaxed>
        {this.props.data.map((symbol, i) => {
          
          return <Modal  key={i} trigger={<List.Item as='a' onClick={this.handleClick}>
          <List.Content>
            <List.Content floated='left'>
              <List.Header  style={{textAlign: 'left'}}>{symbol.quote.symbol}</List.Header>
              <List.Description>{symbol.quote.companyName}</List.Description>
            </List.Content>
            <List.Content floated='right'>
              <List.Header style={{textAlign: 'right'}}>${symbol.quote.latestPrice}</List.Header>
              {(Math.sign(symbol.quote.change) === 1 || Math.sign(symbol.quote.change) === 0)? (
                <List.Description style ={{color: 'green'}}>${symbol.quote.change} %{Math.round(symbol.quote.changePercent*10000)/100}</List.Description>
              ) : (
                <List.Description style= {{color: 'red'}}>${symbol.quote.change} %{Math.round(symbol.quote.changePercent*10000)/100}</List.Description>
              )}
              </List.Content>
            </List.Content>  
          </List.Item>
          }>
          <Modal.Content>
            <ListItem stock={symbol}/>
          </Modal.Content>
          </Modal>
        })}
          
        </List>
      </Segment>
        
      
    );
  }
}

export default ListView;