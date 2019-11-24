import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import styles from './loader.module.scss';

export default class Loader extends Component {
  render() {
    if(this.props.error) {
      return (
        <div className={`${styles['error']}`}>
          <h1 className={`${styles['content']}`}>There has been an error</h1>
          <Button onClick={this.props.retry} variant='contained' color='primary'>
            Retry
          </Button>
        </div>
      )
    } else if (this.props.timedOut) {
      return (
        <div className={`${styles['error']}`}>
          <h1 className={`${styles['content']}`}>The page is taking to long to load</h1>
          <Button onClick={this.props.retry} variant='contained' color='primary'>
            Retry
          </Button>
        </div>
      )
    }

    return (
      <div className={`${styles['loader']}`} />
    )
  }
}
