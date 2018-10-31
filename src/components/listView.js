import React, { Component } from 'react';
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search } from 'semantic-ui-react'


class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content floated='left'>
              <List.Header>Snickerdoodle</List.Header>
              An excellent companion
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated='left'>
              <List.Header>Poodle</List.Header>
              A poodle, its pretty basic
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated='left'>
              <List.Header>Paulo</List.Header>
              He's also a dog
            </List.Content>
          </List.Item>
        </List>
      </Segment>
        
      
    );
  }
}

export default ListView;