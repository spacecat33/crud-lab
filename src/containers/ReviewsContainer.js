import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    console.log("form 9 - rendering review's this.props (form 10)", this.props)
    return (

      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurant={this.props.restaurant} deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  console.log("form 8 - in reviews mapDispatchToProps")
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review}, console.log("form 10 - in addReview dispatch")),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", reviewId}, console.log("in deleteReview dispatch"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)