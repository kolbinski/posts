import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as customReducers from '../reducers'
const reducers = {
  ...customReducers,
}

export default () => {
  let initialState
  if (process.env.__APP__CLIENT__) {
    initialState = global ? global.__INITIAL_STATE__ : undefined
  } else {
    initialState = {}
  }
  const isProduction = process.env.NODE_ENV !== 'production'
  const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(thunk),
      global.devToolsExtension && isProduction ? global.devToolsExtension() : (f) => f
    )
  )
  return store
}
