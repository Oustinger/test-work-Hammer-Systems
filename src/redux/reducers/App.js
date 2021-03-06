import { SET_CLIENTS_DATA, SHOW_APP_ERROR, HIDE_APP_ERROR, SET_LOADING, SET_NEW_CLIENT_DATA } from '../constants/App';

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
    case SET_NEW_CLIENT_DATA:
          const newLocal = state.clientsData.reduce(
              (acc, data) => (data.id === action.data.id ? [...acc, action.data] : [...acc, data]),
              []
          );
      return {
        ...state,
        clientsData: newLocal,
      };
    default:
      return state;
  }
};

export default app;
