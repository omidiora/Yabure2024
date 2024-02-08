import {
  GET_ALL_BOOK,
  UPLOAD_ALL_BOOK,
  ERROR_ALL_BOOK,
  GET_SUGGESTED_BOOK,
  ERROR_SUGGESTED_BOOK,
  GET_POPULAR_BOOK,
  ERROR_POPULAR_BOOK,
  POST_FOLLOW_USER,
  ERROR_FOLLOW_USER,
  GET_SINGLE_BOOK,
  ERROR_SINGLE_BOOK,
  GET_COMMENTS_BOOK,
  UPLOAD_COMMENTS_BOOK,
} from '../types';

const initialState = {
  comments: [],
  loading: true,
  error: null,
  msg: null,
};

export function Comments(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_COMMENTS_BOOK:
      return {
        ...state,
        loading: false,
        comments: action.payload.data,
      };
    //  GET_COMMENTS_BOOK,
    case GET_COMMENTS_BOOK:
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    case ERROR_POPULAR_BOOK:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
