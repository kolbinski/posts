import { createAction } from 'redux-actions'
import api from '../api/posts'

export const POSTS_FETCH_REQUEST = 'POSTS_FETCH_REQUEST'
export const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS'
export const POSTS_FETCH_FAILURE = 'POSTS_FETCH_FAILURE'
export const fetchPostsRequest = createAction(POSTS_FETCH_REQUEST)
export const fetchPostsSuccess = createAction(POSTS_FETCH_SUCCESS)
export const fetchPostsFailure = createAction(POSTS_FETCH_FAILURE)

export const fetchPosts = () => async (dispatch, getState) => {
  if (getState().posts.loadedAll) return
  dispatch(fetchPostsRequest())
  try {
    const data = await api.getPosts()
    dispatch(fetchPostsSuccess({ data, all: true }))
  } catch (e) {
    dispatch(fetchPostsFailure())
  }
}

export const fetchPost = id => async (dispatch, getState) => {
  if (getState().posts.data[id]) return
  dispatch(fetchPostsRequest())
  try {
    const data = await api.getPost(id)
    dispatch(fetchPostsSuccess({ data }))
  } catch (e) {
    dispatch(fetchPostsFailure())
  }
}

export const POST_USERS_FETCH_REQUEST = 'POST_USERS_FETCH_REQUEST'
export const POST_USERS_FETCH_SUCCESS = 'POST_USERS_FETCH_SUCCESS'
export const POST_USERS_FETCH_FAILURE = 'POST_USERS_FETCH_FAILURE'
export const fetchPostUsersRequest = createAction(POST_USERS_FETCH_REQUEST)
export const fetchPostUsersSuccess = createAction(POST_USERS_FETCH_SUCCESS)
export const fetchPostUsersFailure = createAction(POST_USERS_FETCH_FAILURE)

export const fetchPostUsers = () => async (dispatch, getState) => {
  if (getState().postUsers.loaded) return
  dispatch(fetchPostUsersRequest())
  try {
    const data = await api.getPostUsers()
    dispatch(fetchPostUsersSuccess({ data }))
  } catch (e) {
    dispatch(fetchPostUsersFailure())
  }
}

export const POST_COMMENTS_FETCH_REQUEST = 'POST_COMMENTS_FETCH_REQUEST'
export const POST_COMMENTS_FETCH_SUCCESS = 'POST_COMMENTS_FETCH_SUCCESS'
export const POST_COMMENTS_FETCH_FAILURE = 'POST_COMMENTS_FETCH_FAILURE'
export const fetchPostCommentsRequest = createAction(POST_COMMENTS_FETCH_REQUEST)
export const fetchPostCommentsSuccess = createAction(POST_COMMENTS_FETCH_SUCCESS)
export const fetchPostCommentsFailure = createAction(POST_COMMENTS_FETCH_FAILURE)

export const fetchPostComments = id => async (dispatch, getState) => {
  if (getState().postComments.data[id]) return
  dispatch(fetchPostCommentsRequest())
  try {
    const data = await api.getPostComments(id)
    dispatch(fetchPostCommentsSuccess({ id, data }))
  } catch (e) {
    dispatch(fetchPostCommentsFailure())
  }
}

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS)

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id)
    dispatch(deletePostSuccess({ id }))
  } catch (e) {}
}

export const POSTS_FILTER_CHANGE_TEXT = 'POSTS_FILTER_CHANGE_TEXT'
export const postsFilterChangeText = createAction(POSTS_FILTER_CHANGE_TEXT)

export const changePostsFilterText = text => dispatch => {
  dispatch(postsFilterChangeText({ text }))
}

export const POSTS_FILTER_CHANGE_USER = 'POSTS_FILTER_CHANGE_USER'
export const postsFilterChangeUser = createAction(POSTS_FILTER_CHANGE_USER)

export const changePostsFilterUser = userId => dispatch => {
  dispatch(postsFilterChangeUser({ userId }))
}
