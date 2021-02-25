import { searchTypes } from '~/store/types';

const {
  ADD_SEARCH_LIST, CLEAR_SEARCH_LIST,
} = searchTypes;

const addSearchList = (payload) => ({ type: ADD_SEARCH_LIST, payload });
const clearSearchList = () => ({ type: CLEAR_SEARCH_LIST });

export default {
  addSearchList,
  clearSearchList,
};
