import {
  PROFILE_FAILURE,
  GET_PROFILE,
  PROFILE_SUCCESS,
  GET_SINGLE_PROFILE,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE,
} from '../types';

const initialState = {
  profile: [],
  loading: true,
  error: null,
  msg: null,
};

export function profile(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        loading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    case UPDATE_PROFILE:
      return {
        loading: false,
        profile: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function SingleProfile(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PROFILE:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case GET_PROFILE_ERROR:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
