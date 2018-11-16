import React, { Component, Fragment } from 'react';
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
    this.handleMoveUp = this.handleMoveUp.bind(this)
    this.handleMoveDown = this.handleMoveDown.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  handleClick(){
    console.log('clickity click')
  }
  handleMoveUp(e, {index}){
    console.log(index)
    this.props.handleMoveUp(index)
  }
  handleMoveDown(e, {index}){
    this.props.handleMoveDown(index)
  }
  handleDelete(e, {index}){
    this.props.handleDelete(index)
  }

  

  render() {
    return (
      <Segment inverted style={{maxWidth: '800px'}}>
        <List divided inverted relaxed>
        {this.props.data.map((symbol, i) => {   
          return <Fragment>
            {this.props.isEditing === false? 
             <Modal  key={i} trigger={<List.Item as='a' onClick={this.handleClick}>
              <List.Content >
                <List.Content style={{maxWidth: '200px'}} floated='left'>
                  <List.Header  style={{textAlign: 'left'}}>{symbol.quote.symbol}</List.Header>
                  <List.Description style={{textAlign: 'left'}}>{symbol.quote.companyName}</List.Description>
                </List.Content>
                <List.Content floated='right'>
                  <List.Header style={{textAlign: 'right'}}>${symbol.quote.latestPrice.toFixed(2)}</List.Header>
                  {(Math.sign(symbol.quote.change) === 1 || Math.sign(symbol.quote.change) === 0)? (
                    <List.Description style ={{color: 'green'}}><Icon name='triangle up' color='green'/>${symbol.quote.change} | %{Math.round(symbol.quote.changePercent*10000)/100}</List.Description>
                  ) : (
                    <List.Description style= {{color: 'red'}}><Icon name='triangle down' color='red'/>${symbol.quote.change} | %{Math.round(symbol.quote.changePercent*10000)/100}</List.Description>
                  )}
                  </List.Content>
                </List.Content>  
              </List.Item>
              }>
              <Modal.Content>
                <ListItem stock={symbol}/>
              </Modal.Content>
              </Modal>
                : 
                <List.Item key={i}>
                <List.Content>
              <div><Button index={i} onClick={this.handleMoveUp} floated ='left' icon='arrow up'/> <Button index={i} onClick={this.handleMoveDown} floated= 'left' icon='arrow down'/> <Button index={i} onClick={this.handleDelete} floated='left' icon='trash alternate'/></div>
          
            <List.Content style={{maxWidth: '200px'}} floated='left'>
              <List.Header  style={{textAlign: 'left'}}>{symbol.quote.symbol}</List.Header>
              <List.Description style={{textAlign: 'left'}}>{symbol.quote.companyName}</List.Description>
            </List.Content>
           
            </List.Content>  
            </List.Item>

            }
          
          </Fragment>
        })}
          
        </List>
      </Segment>
        
      
    );
  }
}

export default ListView;