import React from 'react' //eslint-disable-line
import { Link } from 'react-router'
import styles from './Modal.css'

export default ({ returnTo, children }) => (
  <div>
    <Link to={returnTo} className={styles.apla} />
    <div className={styles.overlay}>
      <Link to={returnTo} className={styles.close}>×</Link>
      {children}
    </div>
  </div>
)
