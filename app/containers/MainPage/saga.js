import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import {
  loadEventsError,
  loadEventsSuccess,
  loadFeaturedEventsError,
  loadFeaturedEventsSuccess,
} from './actions';
import { LOAD_EVENTS, LOAD_FEATURED_EVENTS } from './constants';
import { events } from './mocks/Events';
import { featuredEvents } from './mocks/FeaturedEvents';

function* loadFeaturedEvents() {
  yield takeLatest(LOAD_FEATURED_EVENTS, fetchFeaturedEvents);
}

function* loadEvents() {
  yield takeLatest(LOAD_EVENTS, fetchEvents);
}

function* fetchFeaturedEvents(action) {
  try {
    yield put(loadFeaturedEventsSuccess(featuredEvents));
  } catch (error) {
    yield put(loadFeaturedEventsError(error));
  }
}

function* fetchEvents() {
  try {
    yield put(loadEventsSuccess(events));
  } catch (error) {
    yield put(loadEventsError(error));
  }
}
// Individual exports for testing
export default function* mainPageSaga() {
  yield all([fetchFeaturedEvents(), fetchEvents()]);
}
