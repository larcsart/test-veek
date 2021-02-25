import { searchTypes } from '~/store/types';

const initialState = {
  searchList: [],
  result: {},
  loading: true,
  error: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.ADD_SEARCH_LIST:
      return {
        ...state,
        searchList: [
          ...state.searchList,
          action.payload,
        ],
        loading: true,
      };

    case searchTypes.CLEAR_SEARCH_LIST:
      return {
        ...state,
        searchList: [],
      };
    default:
      return state;
  }
};

export default search;
