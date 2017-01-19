import merge from 'lodash/merge'
import {
  POST_USERS_FETCH_REQUEST,
  POST_USERS_FETCH_SUCCESS,
  POST_USERS_FETCH_FAILURE
} from '../actions/posts'

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERS_FETCH_REQUEST: {
      return merge({}, state, { loading: true, loaded: false, error: false })
    }
    case POST_USERS_FETCH_SUCCESS: {
      const newState = merge({}, state, { loading: false, loaded: true, error: false })
      action.payload.data.forEach(user => {
        newState.data[user.id] = user
      })
      return newState
    }
    case POST_USERS_FETCH_FAILURE: {
      return merge({}, state, { loading: false, loaded: false, error: true })
    }
    default: return state
  }
}
