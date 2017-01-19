import { fetchPosts, fetchPostUsers } from '../../actions/posts'

const action = ({ dispatch }) => Promise.all([
  dispatch(fetchPosts()),
  dispatch(fetchPostUsers()),
])

export const hooks = {
  fetch: action,
  defer: action,
}
