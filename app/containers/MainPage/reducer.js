/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS_ERROR,
} from './constants';

export const initialState = {
  featuredEvents: {
    loading: false,
    error: null,
    data: null,
  },
  events: {
    loading: false,
    error: null,
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_EVENTS:
        draft.events = {
          loading: true,
          error: null,
          data: null,
        };
        break;
      case LOAD_EVENTS_SUCCESS:
        draft.events = {
          loading: false,
          error: null,
          data: action.payload,
        };
        break;
      case LOAD_EVENTS_ERROR:
        draft.events = {
          loading: false,
          error: action.payload,
          data: null,
        };
        break;
      case LOAD_FEATURED_EVENTS:
        draft.featuredEvents = {
          loading: true,
          error: null,
          data: null,
        };
        break;
      case LOAD_FEATURED_EVENTS_SUCCESS:
        draft.featuredEvents = {
          loading: false,
          error: null,
          data: action.payload,
        };
        break;
      case LOAD_FEATURED_EVENTS_ERROR:
        draft.featuredEvents = {
          loading: false,
          error: action.payload,
          data: null,
        };
        break;
      default:
        return state;
    }
  });

export default mainPageReducer;
