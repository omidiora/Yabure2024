import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_LOADING,
  VERIFY_EMAIL_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESEND_OTP_LOADING,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAILURE,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  FOLLOW_USER_LOADING,
  FOLLOW_USER,
  ERROR_FOLLOW_USER,
  UN_FOLLOW_USER_LOADING,
  UN_ERROR_FOLLOW_USER,
} from '../types';

const initialState = {
  users: [],
  loading: false,
  error: null,
  msg: null,
};

export function account(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        msg: action.msg,
      };
    default:
      return state;
  }
}

export function VerifyOtp(state = initialState, action) {
  switch (action.type) {
    case VERIFY_EMAIL_LOADING:
      return {
        loading: true,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case VERIFY_EMAIL_FAILURE:
      return {
        loading: false,
        error: action.error,
        msg: action.msg,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function RESEND_OTP(state = initialState, action) {
  switch (action.type) {
    case RESEND_OTP_LOADING:
      return {
        loading: true,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case RESEND_OTP_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_LOADING:
      return {
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action,
      };
    case LOGOUT_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function followReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW_USER_LOADING:
      return {
        loading: true,
        // msg: action.msg,
      };

    case FOLLOW_USER:
      return {
        loading: true,
        follower: action.payload,
      };

    case ERROR_FOLLOW_USER:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
}


export function unfollowReducer(state = initialState, action) {
  switch (action.type) {
    case UN_FOLLOW_USER_LOADING:
      return {
        loading: true,
        // msg: action.msg,
      };

    // case FOLLOW_USER:
    //   return {
    //     loading: true,
    //     follower: action.payload,
    //   };

    case UN_ERROR_FOLLOW_USER:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
}
