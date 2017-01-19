import React, { Component } from 'react' //eslint-disable-line
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import cx from 'classnames'
import { deletePost } from '../../actions/posts'
import styles from './Post.css'

class Post extends Component {
  state = {
    deleting: false,
  }

  handleDelete = id => async event => {
    this.setState({ deleting: true })
    event.preventDefault()
    event.stopPropagation()
    await this.props.dispatch(deletePost(id))
    browserHistory.replace('/')
  }

  filterTextMarker = (txt) => {
    const { filterText = '', inModal } = this.props
    if (inModal || filterText.trim() === '') return txt
    const regex = new RegExp(filterText, 'g')
    return txt.replace(regex, `<span class="${styles.mark}">${filterText}</span>`)
  }

  render() {
    const { id, username, title, body, comments, commentsStatusText = '', isComment = false, inModal = false } = this.props
    const { deleting } = this.state
    return (
      <div className={cx(styles.wrap, { [styles.comment]: isComment, [styles.deleting]: deleting })}>
        <div className={styles.wrapIn}>
          <div className={cx({ [styles.content]: inModal })}>
            {!isComment && <div className={styles.delete} onClick={this.handleDelete(id)}>Delete</div>}
            <div className={styles.username} dangerouslySetInnerHTML={{ __html: username }} />
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: this.filterTextMarker(title) }} />
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: this.filterTextMarker(body) }} />
          </div>
          {inModal && commentsStatusText !== '' && <div className={styles.statusText}>{commentsStatusText}</div>}
          {comments && comments.length > 0 && (
            <div className={styles.comments}>
              {comments.map((comment, idx) => <Post key={idx} username={comment.email} title={comment.name} body={comment.body} isComment />)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

const selector = state => ({
  filterText: state.postsFilter.text,
})

export default connect(selector)(Post)
