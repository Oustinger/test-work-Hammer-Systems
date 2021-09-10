import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setClientsData, setLoading, showAppError } from '../actions/App';
import { GET_CLIENTS_DATA, SET_NEW_CLIENT_DATA } from '../constants/App';
import AppService from './../../services/AppService';


export function* getClientsData() {
  yield takeEvery(GET_CLIENTS_DATA, function* () {
    try {
      setLoading(true);
      const clientsData = yield call(AppService.getClientsData);
      setLoading(false);
      if (clientsData.error) {
        yield put(showAppError(clientsData.error));
      } else {
        yield put(setClientsData(clientsData));
      }
    } catch (error) {
      yield put(showAppError(error));
    }
  });
}

export function* uploadNewClientData() {
  yield takeEvery(SET_NEW_CLIENT_DATA, function* ({ data }) {
    try {
      setLoading(true);
      const response = yield call(AppService.uploadNewClientData, data);
      setLoading(false);
      if (response.error) {
        yield put(showAppError(response.error));
      } else {
        // download new clients data
        // yield put(getClientsDataAction());
      }
    } catch (error) {
      yield put(showAppError(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getClientsData), fork(uploadNewClientData)]);
}
