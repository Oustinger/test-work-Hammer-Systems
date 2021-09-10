import { Alert } from 'antd';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { motion } from 'framer-motion';
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { hideAppError } from './../../redux/actions/App';

export const AppViews = ({ showError, errorMessage, hideAppError }) => {
  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        hideAppError();
      }, 3000);
    }
  }, [showError, hideAppError]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showError ? 1 : 0,
          marginBottom: showError ? 20 : 0,
        }}
      >
        <Alert message={errorMessage} type="error" />
      </motion.div>
      <Suspense fallback={<Loading cover="content" />}>
        <Switch>
          <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
          <Route
            exact
            path={`${APP_PREFIX_PATH}/commons/clients/list`}
            component={lazy(() => import(`./commons/clients/clientsList`))}
          />
          <Route
            path={`${APP_PREFIX_PATH}/commons/clients/list/edit/:clientId?`}
            component={lazy(() => import(`./commons/clients/clientsList/editClient`))}
          />
          <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  showError: state.app.showError,
  errorMessage: state.app.errorMessage,
});

export default compose(connect(mapStateToProps, { hideAppError }), React.memo)(AppViews);
