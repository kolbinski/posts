import React, { Component } from 'react' //eslint-disable-line
import cx from 'classnames'
import TextFilter from './TextFilter'
import UserFilter from './UserFilter'
import styles from './PostsFilter.css'

export default class PostsFilter extends Component {
  state = {
    filterOpened: false,
  }

  handleFilterSwitch = () => {
    this.setState({ filterOpened: !this.state.filterOpened })
  }

  render() {
    const { filterOpened } = this.state
    return (
      <div className={cx(styles.wrap, { [styles.filterOpened]: filterOpened })}>
        <div className={styles.content}>
          <h1 className={styles.title}>Posts</h1>
          <div className={styles.icon} onClick={this.handleFilterSwitch}>{filterOpened ? '×' : '⚲'}</div>
          <div className={styles.filter}>
            <UserFilter />
            <TextFilter />
          </div>
        </div>
      </div>
    )
  }
}
