import {
  GET_SUBSCRIPTION_PAYMENT,
  ERROR_SUBSCRIPTION_PAYMENT,
  POST_SUBSCRIPTION_PAYMENT,
  ERROR_POST_SUBSCRIPTION_PAYMENT,
} from '../types';

const initialState = {
  listOfPayment: [],
  loading: true,
  error: null,
  msg: null,
};

export function getPaymentList(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIPTION_PAYMENT:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        listOfPayment: action.payload,
      };
    case ERROR_SUBSCRIPTION_PAYMENT:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function subscriptionPayment(state = initialState, action) {
  switch (action.type) {
    case POST_SUBSCRIPTION_PAYMENT:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        Payment: action.payload,
      };
    case ERROR_POST_SUBSCRIPTION_PAYMENT:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
