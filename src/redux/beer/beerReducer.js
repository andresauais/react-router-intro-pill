import * as BeerTypes from "./beerTypes";
import initialState from './beerState'

function reducer(state, action){
  switch (action.type) {
    case BeerTypes.FETCH_REQUEST:{
      return{
        ...state,
        loading: true,
        error: null,
      };
    }
    case BeerTypes.FETCH_SUCCESS:{
      return {
        ...state,
        loading: false,
        error: null,
        beers: [...action.payload],
      };
    }
    case BeerTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return initialState;
  }
}

export default reducer;