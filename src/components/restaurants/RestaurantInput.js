import React, { Component } from 'react';


class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleFormChange = e => {
     console.log("form 1 - added restaurant name") 
     this.setState({
     text: e.target.value
      })
  }

  handleFormSubmit = e => {
    console.log("form 2 - submitted form and called addRestaurant") 
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            value={this.state.text}
            placeholder="Restaurant Name"
            onChange={e => this.handleFormChange(e)}
          />
          <input type="submit" value="Submit Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;