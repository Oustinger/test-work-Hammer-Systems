import { message } from 'antd';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getClientsData } from './../../../../../redux/actions/App';
import ClientList from './ClientList';

const ClientsListContainer = (props) => {
  const clientsData = props.clientsData;
  useEffect(() => {
    if (clientsData === null) {
      props.getClientsData();
    }
  }, [props, clientsData]);

  const [clientsState, setClientsState] = useState({
    clients: clientsData,
  });

  useEffect(() => {
    setClientsState((prevState) =>
      prevState.clients
        ? clientsState
        : {
            clients: clientsData,
          }
    );
  }, [clientsState, clientsData]);

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
});

export default compose(connect(mapStateToProps, { getClientsData }), withRouter)(ClientsListContainer);
