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
        <List>
          {this.props.stock.news.map((article, i) => {
            return (
            <List.Item key={i}>
              <List.Content><a href={article.url}>{article.headline}</a></List.Content>
              <List.Content>{article.source}</List.Content>
              <List.Content>{article.datetime}</List.Content>
            </List.Item>
            )
          })}

        </List>
        
      </div>
    );
  }
}

export default ListView;