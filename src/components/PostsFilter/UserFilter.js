import React, { Component } from 'react' //eslint-disable-line
import { connect } from 'react-redux'
import cx from 'classnames'
import { changePostsFilterUser } from '../../actions/posts'
import FieldWrapper from '../FieldWrapper/FieldWrapper'
import styles from './PostsFilter.css'

class TextFilter extends Component {
  handleFilterChangeUser = (event) => {
    this.props.dispatch(changePostsFilterUser(+event.target.value))
  }

  handleReset = () => {
    this.props.dispatch(changePostsFilterUser(0))
  }

  sortUsers = (a, b) => {
    const { postUsers } = this.props
    if (postUsers[a].username < postUsers[b].username) return -1
    if (postUsers[a].username > postUsers[b].username) return 1
    return 0
  }

  render() {
    const { postUsers, userId } = this.props
    return (
      <FieldWrapper isReset={userId !== 0} onReset={this.handleReset}>
        <select
          className={styles.filterField}
          value={userId}
          onChange={this.handleFilterChangeUser}
        >
          {userId === 0 && <option value={0}>Search by user</option>}
          {Object
            .keys(postUsers)
            .sort(this.sortUsers)
            .map(key => (
              <option key={key} value={postUsers[key].id}>
                {postUsers[key].username}
              </option>
            )
          )}
        </select>
      </FieldWrapper>
    )
  }
}

const selector = state => ({
  userId: state.postsFilter.userId,
  postUsers: state.postUsers.data,
})

export default connect(selector)(TextFilter)
