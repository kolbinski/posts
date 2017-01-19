import React, { Component } from 'react' //eslint-disable-line
import { Link } from 'react-router'
import styles from './PageNotFound.css'

export default () => (
  <div>
    <h1 className={styles.title}>Page not found</h1>
    <Link to="/" className={styles.link}>Go to homepage</Link>
  </div>
)
