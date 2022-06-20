import { fromJS } from 'immutable';
import { SAVE_INPUT } from '../actionsTypes/actionsGeneral';
import { CHARACTERS, CHARACTER, CHARACTERLIST, RESET, RESET_DETAIL } from '../actionsTypes/actionList';

const generalInit = fromJS({
  inputs: {},
  list: [],
  countList:0,
  totalList:0,
  count: 0,
  total: 0,
  nameList: '',
  especialistas: [],
  character: {},
  characterList: [],
});

export default function general(state = generalInit, action) {
  switch (action.type) {
    case RESET: {
      return state.merge(generalInit);
    }
    case RESET_DETAIL: {
        return state.setIn(['characterList'], fromJS([]))
            .setIn(['countList'], 0)
            .setIn(['totalList'], 0)
            .setIn(['nameList'], '');
      }
    case SAVE_INPUT: {
      const input = state.setIn(['inputs', action.name], action.value);
      return state.merge(input);
    }
    case CHARACTERS: {
        if (action.offset == 0) {
            return state.setIn(['list'], fromJS(action.payload))
            .setIn(['count'], action.count)
            .setIn(['total'], action.total)
            .setIn(['nameList'], action.name)
            .setIn(['origen'], action.origen ? action.origen: '');
        } else {
            return state.setIn(['list'], state.get('list').concat(fromJS(action.payload)))
            .setIn(['count'], state.get('count') + action.count)
            .setIn(['total'], action.total)
            .setIn(['nameList'], action.name)
            .setIn(['origen'], action.origen ? action.origen: '');
        }
      
    }
    case CHARACTER: {
      return state.setIn(['character'], fromJS(action.payload[0]));
    }
    case CHARACTERLIST: {
        if (action.offset == 0) {
            return state.setIn(['characterList'], fromJS(action.payload))
            .setIn(['countList'], action.count)
            .setIn(['totalList'], action.total)
            .setIn(['nameList'], action.name);
        } else {
            return state.setIn(['characterList'], state.get('characterList').concat(fromJS(action.payload)))
            .setIn(['countList'], state.get('countList') + action.count)
            .setIn(['totalList'], action.total)
            .setIn(['nameList'], action.name);
        }
    }
    default: {
      break;
    }
  }
  return state;
}
