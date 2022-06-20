import { fromJS } from 'immutable';
import IS_LOADING from '../actionsTypes/actionHome';

const initialState = fromJS({
  active: true,
});

function isLoading(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return state.set('active', action.payload.value);
    default:
      return state;
  }
}

export default isLoading;
