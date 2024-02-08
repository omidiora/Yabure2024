import {
  
  LOGIN_LOADING,
  GET_UPLOAD_PDF,
  UPLOAD_PDF_ERROR,
  UPDATE_UPLOAD_PDF,
  UPLOAD_PDF,
  ERROR_VOICE_RECOREDED,
  POST_VOICE_RECOREDED,
} from '../types';

const initialState = {
  upload: [],
  loading: true,
  error: null,
  msg: null,
};

export function Upload(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        loading: true,
      };
    case UPLOAD_PDF:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };

    case UPDATE_UPLOAD_PDF:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };
    case UPLOAD_PDF_ERROR:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function UploadAudio(state = initialState, action) {
  switch (action.type) {
    case POST_VOICE_RECOREDED:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };

    case ERROR_VOICE_RECOREDED:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
