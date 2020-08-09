import { createStore, compose } from 'redux'

import reducer from './reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

function getStore(initialState) {
  const store = createStore(reducer, initialState, composeEnhancers())
  return store
}

export default getStore
