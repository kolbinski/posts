import React from 'react' //eslint-disable-line
import ReactDOM from 'react-dom' //eslint-disable-line
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import useScroll from 'react-router-scroll'
import { applyRouterMiddleware, match, Router, browserHistory } from 'react-router'
import generateRouting from './routing.js'
import getStore from './store'
import shouldUpdateScroll from './shouldUpdateScroll'

export const runClient = (id = 'app') => {
  const store = getStore()
  const routes = generateRouting(store)
  browserHistory.listen((location) => {
    match({ routes, location }, (_, redirect, props) => {
      const { dispatch, getState } = store
      const locals = {
        path: props.location.pathname,
        query: props.location.query,
        params: props.params,
        dispatch,
        getState
      }
      const components = props.routes.map((route) => route.component)
      trigger('defer', components, locals)
      .then(() => {
        trigger('done', components, locals)
      })
      ReactDOM.render(
        <Provider store={store}>
          <Router
            routes={routes}
            history={browserHistory}
            render={applyRouterMiddleware(useScroll(shouldUpdateScroll))}
          />
        </Provider>,
        document.getElementById(id)
      )
    })
  })
}
