import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from "redux-promise-middleware"

import { authReducer } from '../reducers/authReducer'
import { facebookReducer } from '../reducers/facebookReducer'

const middleware = applyMiddleware(promise(), thunkMiddleware)

const allReducers = combineReducers({
  authReducer, facebookReducer
});

export default createStore(allReducers, middleware)
