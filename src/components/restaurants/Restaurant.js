import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDeleteClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  // handleUpdateClick = () => {
  //   this.props.updateRestaurant(this.props.restaurant.id)
  // }


  render() {
    const { restaurant } = this.props;
    console.log("form 7 - rendering" + restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleDeleteClick()}> Delete </button>
          {/* <button onClick={() => this.handleUpdateClick()}> Edit/update </button> */}
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
