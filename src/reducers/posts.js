import merge from 'lodash/merge'
import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  DELETE_POST_SUCCESS,
} from '../actions/posts'

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  loadedAll: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST: {
      return merge({}, state, { loading: true, loaded: false, error: false })
    }
    case POSTS_FETCH_SUCCESS: {
      return merge({}, state, {
        loading: false, loaded: true, error: false,
        data: { ...state.data, ...action.payload.data },
        loadedAll: action.payload.all === true
      })
    }
    case POSTS_FETCH_FAILURE: {
      return merge({}, state, { loading: false, loaded: false, error: true })
    }
    case DELETE_POST_SUCCESS: {
      const newState = merge({}, state)
      delete newState.data[action.payload.id]
      return newState
    }
    default: return state
  }
}
