import React, { Component } from 'react';
import { Info } from '@material-ui/icons';

import styles from './callout.module.scss';

export default class Callout extends Component {
  render() {
    return (
      <div {...this.props} className={`${styles['callout']}`}>
        <div className={`${styles['icon']}`}>
          <Info color='primary' />
        </div>

        <div className={`${styles['icon']}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
