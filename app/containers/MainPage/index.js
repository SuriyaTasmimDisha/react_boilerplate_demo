/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectFeaturedEventsData,
  makeSelectEventsData,
} from './selectors';
import { loadEvents, loadFeaturedEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  const { featuredEvents, events } = props;

  console.log(featuredEvents.data);
  console.log(events.data);

  useEffect(() => {
    loadEvents('121', 0, 15, '');
    loadFeaturedEvents('123', 0, 5);
  }, []);

  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      {/* <FeaturedEvents featuredEvents={featuredEvents} />
      <Events events={events} /> */}
    </div>
  );
}

MainPage.propTypes = {
  featuredEvents: PropTypes.object,
  events: PropTypes.object,
  loadEvents: PropTypes.func,
  loadFeaturedEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  featuredEvents: makeSelectFeaturedEventsData(),
  events: makeSelectEventsData(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: (tenantId, skip, take, searchTerm) =>
      dispatch(loadEvents({ tenantId, skip, take, searchTerm })),
    loadFeaturedEvents: (tenantId, skip, take) =>
      dispatch(loadFeaturedEvents({ tenantId, skip, take })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
