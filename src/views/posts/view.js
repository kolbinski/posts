import React, { Component } from 'react' //eslint-disable-line
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from "react-helmet"
import Post from '../../components/Post/Post'
import styles from './view.css'

class View extends Component {
  filterPostsByText = key => {
    const { posts, filterText, filterUserId } = this.props
    let match = true
    if (filterText.trim() !== '') {
      match = match && (posts[key].title.includes(filterText) || posts[key].body.includes(filterText))
    }
    if (filterUserId !== 0) {
      match = match && posts[key].userId === filterUserId
    }
    return match
  }

  render() {
    const { posts, postUsers, loading, error } = this.props
    if (loading || error) {
      return (
        <div className={styles.loading}>
          <Helmet title="Posts" />
          {loading && 'Loading posts...'}
          {error && 'Posts could not be loaded. Please try again later.'}
        </div>
      )
    }
    return (
      <div className={styles.wrap}>
        <Helmet title="Posts" />
        {Object
          .keys(posts)
          .filter(this.filterPostsByText)
          .map(key => (
            <Link
              key={key}
              to={{
                pathname: `/post/${posts[key].id}`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}
              className={styles.link}
            >
              <Post username={postUsers[posts[key].userId].username} {...posts[key]} />
            </Link>
          ))
        }
      </div>
    )
  }
}

const selector = state => ({
  posts: state.posts.data,
  postUsers: state.postUsers.data,
  loading: state.posts.loading || state.postUsers.loading,
  error: state.posts.error || state.postUsers.error,
  filterText: state.postsFilter.text,
  filterUserId: state.postsFilter.userId,
})

export default connect(selector)(View)
