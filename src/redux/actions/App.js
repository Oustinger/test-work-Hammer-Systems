import { SET_CLIENTS_DATA, GET_CLIENTS_DATA, SHOW_APP_ERROR, SET_LOADING, HIDE_APP_ERROR, SET_NEW_CLIENT_DATA } from '../constants/App';

export const setClientsData = (clientsData) => {
  return {
    type: SET_CLIENTS_DATA,
    clientsData,
  };
};

export const getClientsData = () => {
  return {
    type: GET_CLIENTS_DATA,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    isLoading,
  };
};

export const showAppError = (message) => {
  return {
    type: SHOW_APP_ERROR,
    message,
  };
};

export const hideAppError = () => {
  return {
    type: HIDE_APP_ERROR,
  };
};

export const setNewClientData = (data) => {
  return {
    type: SET_NEW_CLIENT_DATA,
    data,
  };
};
