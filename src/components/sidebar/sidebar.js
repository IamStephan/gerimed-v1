import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import styles from './sidebar.module.scss'

@inject('AppStore')
@withRouter
@observer
export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }

    this.closeSidebar = this.closeSidebar.bind(this)
  }

  closeSidebar() {
    this.setState({
      ...this.state,
      menuOpen: false
    })
    setTimeout(() => {
      this.props.AppStore.closeSidebar()
    }, styles.animationLength)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        menuOpen: true
      })
    }, 10);
    
  }

  render() {
    const open = this.state.menuOpen ? 'open' : 'closed'

    return (
      <div className={`${styles['sidebar']}`}>
        <div onClick={() => this.closeSidebar()} className={`${styles['dimmer']} ${styles[open]}`} />

        <div className={`${styles['menu']} ${styles[open]}`}>

        </div>
      </div>
    );
  }
}
