import React, { Component } from 'react' //eslint-disable-line
import Modal from '../Modal/Modal'
import PostsFilter from '../PostsFilter/PostsFilter'
import styles from './Wrapper.css'

class Wrapper extends Component {
  componentWillReceiveProps(nextProps) {
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props
    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
    return (
      <div className={styles.wrap}>
        <PostsFilter />
        <div className={styles.content}>
          <div id="postsBg" className={styles.bg}>
            {isModal ?
              this.previousChildren :
              this.props.children
            }
          </div>
          {isModal && this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper
