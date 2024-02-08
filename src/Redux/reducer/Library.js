import {
  ERROR_FINISHED_LIBRARY_BOOK,
  ERROR_LIBRARY_BOOK,
  ERROR_RATING_BOOK,
  ERROR_READING_FINISHED_LIBRARY_BOOK,
  FINISHED_LIBRARY_BOOK,
  GET_RATING_BOOK,
  GET_READING_LIBRARY_BOOK,
  NEW_LIBRARY_BOOK,
  POST_RATING_BOOK,
  POST_READING_LIBRARY_BOOK,
} from '../types';

const initialState = {
  loading: true,
  error: null,
  NewLibraryBooks: [],
  ReadingBook: [],
  Ratings: [],
  finishedBook: [],
};

export function NewLibraryBook(state = initialState, action) {
  switch (action.type) {
    case NEW_LIBRARY_BOOK:
      return {
        ...state,
        loading: false,
        NewLibraryBooks: action.payload.data,
      };

    case ERROR_LIBRARY_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function ReadingBook(state = initialState, action) {
  switch (action.type) {
    case POST_READING_LIBRARY_BOOK:
      return {
        ...state,
        loading: false,
        ReadingBook: action.payload.data,
      };

    case GET_READING_LIBRARY_BOOK:
      return {
        ...state,
        loading: false,
        ReadingBook: action.payload.data,
      };

    case ERROR_READING_FINISHED_LIBRARY_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function GET_READING_BOOK(state = initialState, action) {
  switch (action.type) {
    case GET_READING_LIBRARY_BOOK:
      return {
        ...state,
        loading: false,
        ReadingBook: action.payload.data,
      };

    case ERROR_READING_FINISHED_LIBRARY_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function FINISHED_BOOK(state = initialState, action) {
  switch (action.type) {
    case FINISHED_LIBRARY_BOOK:
      return {
        ...state,
        loading: false,
        finishedBook: action.payload.data,
      };

    case ERROR_FINISHED_LIBRARY_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function Rating(state = initialState, action) {
  switch (action.type) {
    case GET_RATING_BOOK:
      return {
        ...state,
        loading: false,
        Ratings: action.payload.data,
      };

    case POST_RATING_BOOK:
      return {
        ...state,
        loading: false,
        Ratings: action.payload.data,
      };

    case ERROR_RATING_BOOK:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
