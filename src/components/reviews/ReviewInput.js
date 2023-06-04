import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleFormChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            value={this.state.text}
            placeholder="Your review here!"
            onChange={e => this.handleFormChange(e)}
          />
          <input type="submit" value="Submit review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
