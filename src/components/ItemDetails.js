import React, { Component } from 'react';
import { Menu, Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search, ModalContent } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
import ListItem from './listItem.js'
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
      <div>
      
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
        
      </div>
    );
  }
}

export default ListView;