import { SET_CLIENTS_DATA, SHOW_APP_ERROR, HIDE_APP_ERROR, SET_LOADING } from '../constants/App';

const initState = {
  isLoading: false,
  showError: false,
  errorMessage: '',
  clientsData: null,
};

const app = (state = initState, action) => {
  switch (action.type) {
    case SET_CLIENTS_DATA:
      return {
        ...state,
        clientsData: action.clientsData,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SHOW_APP_ERROR:
      return {
        ...state,
        errorMessage: action.message,
        showError: true,
      };
    case HIDE_APP_ERROR:
      return {
        ...state,
        errorMessage: '',
        showError: false,
      };
    default:
      return state;
  }
};

export default app;
