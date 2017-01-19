import React from 'react' //eslint-disable-line
import styles from './FieldWrapper.css'

export default ({ children, isReset, onReset }) => (
  <div className={styles.wrap}>
    {children}
    {isReset && <div className={styles.reset} onClick={onReset}>×</div>}
  </div>
)
