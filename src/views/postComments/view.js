import React, { Component } from 'react' //eslint-disable-line
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import Post from '../../components/Post/Post'
import Modal from '../../components/Modal/Modal'
import styles from './view.css'

class View extends Component {

  render() {
    const { post, postComments, postUsers, error, loadingComments, errorComments } = this.props
    let commentsStatusText = ''
    if (loadingComments) commentsStatusText = 'Loading comments...'
    if (errorComments) commentsStatusText = 'Comments could not be loaded. Please try again later.'
    return (
      <Modal returnTo={'/'}>
        <Helmet title="Posts" />
        <div className={styles.wrap}>
          {error && (
            <div className={styles.error}>
              Post could not be loaded.
              <br />
              Please again later.
            </div>
          )}
          {!error && post && post.userId && postUsers[post.userId] && (
            <div>
              <Helmet title={post.title} meta={[{ name: 'description', content: post.body.replace(/\n/g, ' ') }]} />
              <Post
                {...post}
                username={postUsers[post.userId].username}
                comments={postComments}
                commentsStatusText={commentsStatusText}
                inModal
              />
            </div>
          )}
        </div>
      </Modal>
    )
  }
}

const selector = (state, props) => ({
  post: state.posts.data[props.params.id],
  postComments: state.postComments.data[props.params.id],
  postUsers: state.postUsers.data,
  error: state.posts.error || state.postUsers.error,
  loadingComments: state.postComments.loading,
  errorComments: state.postComments.error,
})

export default connect(selector)(View)
