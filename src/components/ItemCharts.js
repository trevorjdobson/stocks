import React, { Component } from 'react';
import { Menu, Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search, ModalContent } from 'semantic-ui-react'
import axios from 'axios'
import Get from '../scripts/stockData.js'
import ListItem from './listItem.js'
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
        <p>Chart Goes Here</p>
        
      </div>
    );
  }
}

export default ListView;