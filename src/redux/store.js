import { combineReducers, createStore } from 'redux';
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
    alert: alertReducer,
});

const storeAlert = createStore(rootReducer);

export { storeAlert };
