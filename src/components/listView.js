import React, { Component } from 'react';
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }
  componentDidMount(){
    
  }

  componentDidUpdate(){

  }


  render() {
    return (
      <Segment inverted>
        <List divided inverted relaxed>
        {this.props.data.map((symbol, i) => {
          console.log(symbol.quote)
          return <List.Item>
            <List.Content floated='left'>
              <List.Header>{symbol.quote.symbol}</List.Header>
              {symbol.quote.companyName}
            </List.Content>
            <List.Content floated='right'>{symbol.quote.latestPrice}</List.Content>

          </List.Item>
        })}
          
        </List>
      </Segment>
        
      
    );
  }
}

export default ListView;