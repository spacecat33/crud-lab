import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    console.log("4. (form 6) rendering restaurants component", this.props.restaurants.map(rest => rest.text))

    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} updateRestaurant={this.props.updateRestaurant} restaurant={restaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;