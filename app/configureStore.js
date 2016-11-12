import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '~/reducers/index'

const loggerMiddleware = createLogger();

export default function configureStore(preLoadedState) {
  return createStore(
    reducers,
    preLoadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}