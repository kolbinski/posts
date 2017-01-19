import { fetchPost, fetchPostComments, fetchPostUsers } from '../../actions/posts'

const action = ({ dispatch, params }) => Promise.all([
  dispatch(fetchPost(params.id)),
  dispatch(fetchPostComments(params.id)),
  dispatch(fetchPostUsers()),
])

export const hooks = {
  fetch: action,
  defer: action,
}
