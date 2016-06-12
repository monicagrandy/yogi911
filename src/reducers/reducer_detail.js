import { FETCH_DETAIL } from '../actions/index';

const INITIAL_STATE = { term: null, detail: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_DETAIL:
      return { ...state, detail: action.payload.data }
    default:
      return state;
  }
}
