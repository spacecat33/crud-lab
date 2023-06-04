import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    return (
      <ul>
        {relatedReviews.map(review => <Review key={review.id} deleteReview={this.props.deleteReview} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;