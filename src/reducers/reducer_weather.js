import { FETCH_WEATRHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action received', action);
  switch (action.type) {
  case FETCH_WEATRHER:
    //return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}
