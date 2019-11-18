import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Button } from '@material-ui/core';

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

    this.openPage = this.openPage.bind(this)
    this.closeSidebar = this.closeSidebar.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        menuOpen: true
      })
    }, 10);
  }

  openPage(url) {
    this.props.history.push(url)
    this.closeSidebar()
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

  render() {
    const open = this.state.menuOpen ? 'open' : 'closed'

    return (
      <div className={`${styles['sidebar']}`}>
        <div onClick={() => this.closeSidebar()} className={`${styles['dimmer']} ${styles[open]}`} />

        <div className={`${styles['menu']} ${styles[open]}`}>
          <div className={styles['header']}>
            <img alt='Gerimed logo' src={require('../../static/Gerimed_logo.png')} />
          </div>

          <div className={`${styles['controls']}`}>
            <Button 
              variant={this.props.location.pathname === '/' ? 'contained' : 'text'}
              color={this.props.location.pathname === '/' ? 'primary' : 'default'} 
              onClick={() => this.openPage('/')}
            >
              Home
            </Button>
            <Button 
              variant={this.props.location.pathname === '/services' ? 'contained' : 'text'}
              color={this.props.location.pathname === '/services' ? 'primary' : 'default'}
              onClick={() => this.openPage('/services')}
            >
              Services
            </Button>
            <Button 
              variant={this.props.location.pathname === '/about' ? 'contained' : 'text'}
              color={this.props.location.pathname === '/about' ? 'primary' : 'default'}
              onClick={() => this.openPage('/about')}
            >
              About Us
            </Button>
            <Button 
              variant={this.props.location.pathname === '/contact' ? 'contained' : 'text'}
              color={this.props.location.pathname === '/contact' ? 'primary' : 'default'}
              onClick={() => this.openPage('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
