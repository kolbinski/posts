import merge from 'lodash/merge'
import { POSTS_FILTER_CHANGE_TEXT, POSTS_FILTER_CHANGE_USER } from '../actions/posts'

const initialState = {
  text: '',
  userId: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FILTER_CHANGE_TEXT: {
      return merge({}, state, {text: action.payload.text })
    }
    case POSTS_FILTER_CHANGE_USER: {
      return merge({}, state, {userId: action.payload.userId })
    }
    default: return state
  }
}
