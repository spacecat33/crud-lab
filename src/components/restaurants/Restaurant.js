import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDeleteClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  handleUpdateClick = (e) => {
    console.log("submitted edit form and called updateRestaurant") 
    e.preventDefault();
    this.props.updateRestaurant(this.props.restaurant.id)
  }

  handleFormUpdateChange = e => {
    this.setState({
      text: e.target.value
    })
  }


  render() {
    const { restaurant } = this.props;
    console.log("form 7 - rendering" + restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleDeleteClick()}> Delete </button>
          <div>
            <form onSubmit={(e) => this.handleUpdateClick(e)}>
                <input
                  type="text"
                  placeholder={this.state}
                  onChange={e => this.handleFormUpdateChange(e)}
                />
           <button type="submit"> Edit/update </button>
          </form>
          </div>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
