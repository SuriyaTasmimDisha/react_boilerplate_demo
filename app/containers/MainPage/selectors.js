import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate,
  );

const makeSelectFeaturedEventsData = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.featuredEvents,
  );

const makeSelectEventsData = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.events,
  );
  
export {
  selectMainPageDomain,
  makeSelectEventsData,
  makeSelectFeaturedEventsData,
};
