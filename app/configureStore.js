import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '~/reducers/index'
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const loggerMiddleware = createLogger();

const reducer = compose(
  mergePersistedState()
)(reducers);

const storage = compose(
  // filter('nested.key')
)(adapter(window.localStorage));

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,

  ),
  persistState(storage, 'state')
);

export default function configureStore(preLoadedState) {
  return createStore(
    reducer,
    preLoadedState,
    enhancer
  )
}