import * as BeerTypes from "./beerTypes";

function reducer(state, action){
  switch (action.type) {
    case BeerTypes.FETCH_REQUEST:{
      return{
        ...state,
        loading: true,
        error: null,
      };
    }
    case BeerTypes.FETCH_SUCCESS{
      return {
        ...state,
        loading: false,
        error: null,
        beers: [...action.payload],
      };
    }
    case AppTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}