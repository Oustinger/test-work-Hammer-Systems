import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import App from './App';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    app: App,
});

export default reducers;