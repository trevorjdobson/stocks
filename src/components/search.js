import React, { Fragment, Component } from 'react';
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed, Search } from 'semantic-ui-react'

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addBox: ''
    }
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    this.setState({addBox: e.target.value.toLowerCase()})
    
  }

  handleClick(e){
    console.log(this.state.addBox)
    this.props.addStock(this.state.addBox)
    this.setState({addBox: ''})
  }

  render() {
    return (
      <Fragment>
        <Grid>
        <Grid.Column width={6}>
          <Input value={this.state.addBox} action={<Button icon='plus' onClick={this.handleClick} />} onChange={this.handleChange} placeholder='SYMBOL'/>
        </Grid.Column>
        </Grid>
      </Fragment>
    );
  }

}

export default SearchView;