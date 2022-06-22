import IS_LOADING from '../actionsTypes/actionHome';
import { CHARACTERS, CHARACTER, CHARACTERLIST, RESET, RESET_DETAIL } from '../actionsTypes/actionList';
import { fetchError } from './errorAction';
import axios from 'axios';
import { openModal } from './generalsAction';
import { PUBLIKEY, HASH } from '../constants/constans';

export function DoneCharacters(data, offset, name, origen) {
    return {
      type: CHARACTERS,
      payload: data.results,
      count: data.count,
      total: data.total,
      offset,
      name,
      origen,
    };
  }
export function DoneCharacter(data) {
    return {
    type: CHARACTER,
    payload: data
    };
}
export function DoneCharacterList(data,offset,name) {
    return {
      type: CHARACTERLIST,
      payload: data.results,
      count: data.count,
      total: data.total,
      offset,
      name,
    };
  }
export function reset() {
    return {
        type: RESET,
    };
}
export function resetListCharacter() {
    return {
        type: RESET_DETAIL,
    };
}

export function getCharacters(name, offset, origen) {
      const urlGet = `${name}?limit=100&offset=${offset}&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;
      return (dispatch) => {
        axios.get(urlGet)
          .then(response => {
            dispatch(isLoading(false));
            dispatch(DoneCharacters(response.data.data, offset, name, origen));
          })
          .catch(error => dispatch(fetchError(error)));
      };
 }
export function getCharacter(id, origen) {
    let urlGet = `characters/${id}?0&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;
    if (origen != 'characters') {
        urlGet = `comics/${id}?0&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;    
    }
    return (dispatch) => {
        axios.get(urlGet)
        .then(response => {
            dispatch(openModal())
            dispatch(DoneCharacter(response.data.data.results))
        })
        .catch(error => dispatch(fetchError(error)));
    };
 }
 export function search(origen, offset, text) {
    let urlGet = `${origen}?nameStartsWith=${text}&limit=100&offset=${offset}&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;
    if (origen != 'characters') {
        urlGet =  `${origen}?titleStartsWith=${text}&limit=100&offset=${offset}&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;   
    }
    return (dispatch) => {
      axios.get(urlGet)
        .then(response => {
          dispatch(isLoading(false));
          dispatch(DoneCharacters(response.data.data, offset, origen, origen));
        })
        .catch(error => dispatch(fetchError(error)));
    };
}
export function getCharacterList(id,name,offset, origen) {
    let urlGet = `characters/${id}/${name}?limit=100&offset=${offset}&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;
    if (origen != 'characters') {
        urlGet = `${origen}/${id}/${name}?limit=100&offset=${offset}&ts=1&apikey=${PUBLIKEY}&hash=${HASH}`;
    }
    return (dispatch) => {
        axios.get(urlGet)
        .then(response => {
            dispatch(isLoading(false))
            dispatch(DoneCharacterList(response.data.data,offset,name))
        })
        .catch(error => dispatch(fetchError(error)));
    };
}
export default function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value,
    },
  };
}
