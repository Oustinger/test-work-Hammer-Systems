import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { GET_CLIENTS_DATA } from '../constants/App';
import { setClientsData, showAppError, setLoading } from '../actions/App';

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

export default function* rootSaga() {
  yield all([fork(getClientsData)]);
}
