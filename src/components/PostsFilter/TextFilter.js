import React, { Component } from 'react' //eslint-disable-line
import { connect } from 'react-redux'
import cx from 'classnames'
import { changePostsFilterText } from '../../actions/posts'
import FieldWrapper from '../FieldWrapper/FieldWrapper'
import styles from './PostsFilter.css'

class TextFilter extends Component {
  handleFilterChangeText = (event) => {
    this.props.dispatch(changePostsFilterText(event.target.value))
  }

  handleReset = () => {
    this.props.dispatch(changePostsFilterText(''))
  }

  render() {
    const { text } = this.props
    return (
      <FieldWrapper isReset={text !== ''} onReset={this.handleReset}>
        <input
          className={cx(styles.filterField, styles.filterFieldText)}
          type="text"
          placeholder="Search by title or content"
          onChange={this.handleFilterChangeText}
          value={text}
        />
      </FieldWrapper>
    )
  }
}

const selector = state => ({
  text: state.postsFilter.text,
})

export default connect(selector)(TextFilter)
