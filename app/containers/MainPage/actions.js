/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS_ERROR,
} from './constants';

export function loadEvents(tenantId, skip, take, searchItem) {
  return {
    type: LOAD_EVENTS,
    tenantId,
    skip,
    take,
    searchItem,
  };
}

export function loadEventsSuccess(data) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    payload: data,
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    payload: error,
  };
}

export function loadFeaturedEvents(tenantId, skip, take) {
  return {
    type: LOAD_FEATURED_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadFeaturedEventsSuccess(data) {
  return {
    type: LOAD_FEATURED_EVENTS_SUCCESS,
    payload: data,
  };
}

export function loadFeaturedEventsError(error) {
  return {
    type: LOAD_FEATURED_EVENTS_ERROR,
    payload: error,
  };
}
