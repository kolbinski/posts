import { trigger } from 'redial'

export default (props, store) => {
  const { dispatch, getState } = store
  const locals = {
    path: props.location.pathname,
    query: props.location.query,
    params: props.params,
    dispatch,
    getState
  }
  const components = props.routes.map((route) => route.component)
  return trigger('fetch', components, locals)
}
