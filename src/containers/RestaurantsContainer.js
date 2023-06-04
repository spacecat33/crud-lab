import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    console.log("3. (form 5.) rendering restaurantContainers's this.props", this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => {
  console.log("2. in restaurants mapDispatchToProps")
  return {
    addRestaurant: restaurantData => dispatch({type: "ADD_RESTAURANT", text: restaurantData}, console.log("form 3. in addRestaurant dispatch")),
    deleteRestaurant: restaurantId => dispatch({type: "DELETE_RESTAURANT", id: restaurantId}, console.log("in deleteRestaurant dispatch")),
    updateRestaurant: restaurantId => dispatch({type: "UPDATE_RESTAURANT", id: restaurantId}, console.log("in updateRestaurant dispatch")),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);