import { Alert, message } from 'antd';
import Loading from 'components/shared-components/Loading';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getClientsData, hideAppError } from './../../../../../redux/actions/App';
import ClientList from './ClientList';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const ClientsListContainer = (props) => {
  const clientsData = props.clientsData;
  useEffect(() => {
    if (clientsData === null) {
      props.getClientsData();
    }
    // eslint-disable-next-line
  }, []);

  const showError = props.showError;
  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        props.hideAppError();
      }, 3000);
    }
  }, [props, showError]);

  const [clientsState, setClientsState] = useState({
    clients: props.clientsData,
  });

  const deleteClient = (clientsId) => {
    setClientsState({
      clients: clientsState.clients.filter((item) => item.id !== clientsId),
    });
    message.success({ content: `Deleted client ${clientsId}`, duration: 2 });
  };

  const [clientViewState, setClientViewState] = useState({
    clientProfileVisible: false,
    selectedClient: null,
  });

  const showClientProfile = (clientInfo) => {
    setClientViewState({
      clientProfileVisible: true,
      selectedClient: clientInfo,
    });
  };

  const closeClientProfile = () => {
    setClientViewState({
      clientProfileVisible: false,
      selectedClient: null,
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: props.showError ? 1 : 0,
          marginBottom: props.showError ? 20 : 0,
        }}
      >
        <Alert message={props.errorMessage} type="error" />
      </motion.div>
      {props.isLoading ? (
        <Loading cover="content" />
      ) : (
        <ClientList
          clients={clientsState.clients}
          viewState={clientViewState}
          deleteClient={deleteClient}
          showClientProfile={showClientProfile}
          closeClientProfile={closeClientProfile}
          history={props.history}
          currentUrl={`${APP_PREFIX_PATH}/commons/clients/list/edit`}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
  clientsData: state.app.clientsData,
  showError: state.app.showError,
  errorMessage: state.app.errorMessage,
});

export default compose(
    connect(mapStateToProps, { getClientsData, hideAppError }),
    withRouter,
)(ClientsListContainer);