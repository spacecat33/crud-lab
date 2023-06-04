
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  let restaurant;
  let newReview;

  switch(action.type){
    case "ADD_RESTAURANT":
      restaurant = {
        text: action.text,
        id: cuid()
      }
      const newState = {restaurants: [...state.restaurants.concat(restaurant)]}
      console.log("form 4. new resto is called: " + newState.restaurants[newState.restaurants.length - 1].text)
      return {...state, restaurants: [...state.restaurants.concat(restaurant)]}

    case "DELETE_RESTAURANT":
      return { ...state, restaurants: [...state.restaurants.filter(rest => rest.id !== action.id)]}

    case "ADD_REVIEW":
      newReview = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid()
      }
      return { ...state, reviews: [ ...state.reviews.concat(newReview)]}

    case "DELETE_REVIEW":
      return { ...state, reviews: [ ...state.reviews.filter(review => review.id !== action.reviewId)]}

    default:
      console.log("1. Current state.restaurants is: " + state.restaurants.map(resto => resto.text))
      return state
  }
}