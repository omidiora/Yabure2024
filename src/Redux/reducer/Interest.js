import {
  GET_INTEREST,
  INTEREST_ERROR,
  INTEREST_LOADING,
  ADD_INTEREST,
} from '../types';

const initialState = {
  interest: [],
  loading: true,
  error: null,
  msg: null,
};

export function interest(state = initialState, action) {
  switch (action.type) {
    case INTEREST_LOADING:
      return {
        loading: true,
      };

    case GET_INTEREST:
      return {
        ...state,
        loading: false,
        interest: action.payload.data.map(data => {
          return {...data, selected: false};
        }),
      };

    case ADD_INTEREST:
      return {
        ...state,
        loading: false,
        interest: action.payload
      };
    case INTEREST_ERROR:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
