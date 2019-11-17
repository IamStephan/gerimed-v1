import React, { Component } from 'react';

import styles from './construction.module.scss'

export default class Construction extends Component {
  render() {
    return (
      <div className={`${styles['construction']}`}>
        <h1>This page is still under construction :(</h1>
        <p>Mean while grap a cup of coffie while we complete this page</p>
      </div>
    );
  }
}
