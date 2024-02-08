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
} from '../types';

const initialState = {
  notes: {},
  loading: true,
  error: null,
  msg: null,
  suggestedNote: [],
  popularBook: [],
  followers: [],
  singleBook: [],
};

export function Notes(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BOOK:
      return {
        ...state,
        loading: false,
        notes: action.payload.data.map(data => {
          return {...data};
        }),
      };

    case UPLOAD_ALL_BOOK:
      return {
        ...state,
        loading: false,
        notes: action.payload,
      };
    case ERROR_ALL_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function SingleNotes(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return {
        ...state,
        loading: false,
        singleBook: action.payload.data,
      };
    // ERROR_SINGLE_BOOK
    case ERROR_SINGLE_BOOK:
      return {
        loading: false,
        error: action,
        // msg: action.msg,
      };
    default:
      return state;
  }
}

export function SuggestedNote(state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTED_BOOK:
      return {
        ...state,
        loading: false,
        suggestedNote: action.payload.data,
      };

    case ERROR_SUGGESTED_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function POPULAR_UPLOADER(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_BOOK:
      return {
        ...state,
        loading: false,
        popularUploader: action.payload.data,
      };

    case ERROR_POPULAR_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function FollowingUser(state = initialState, action) {
  switch (action.type) {
    case POST_FOLLOW_USER:
      return {
        ...state,
        loading: false,
        followers: action.payload.data,
      };

    case ERROR_FOLLOW_USER:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
