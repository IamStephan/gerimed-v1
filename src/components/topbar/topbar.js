import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import styles from './topbar.module.scss'

import Sidebar from '../sidebar/sidebar'
import logo from '../../static/Gerimed_logo.png';

@inject('AppStore')
@withRouter
@observer
export default class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0
    }

    this.setWindowSize = this.setWindowSize.bind(this)
    this.openPage = this.openPage.bind(this)
  }

  componentDidMount() {
    this.setWindowSize()
    window.addEventListener('resize', this.setWindowSize)
  }

  setWindowSize() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    const { AppStore } = this.props

    return (
      <nav className={`${styles['topbar']}`}>
        <div className={`${styles['logo']}`}>
          <img alt='gerimed' className={`${styles['img']}`} src={logo} />
        </div>

        {
          this.state.windowWidth > styles.breakpointTwo ? (
            <div className={`${styles['navigationDesktop']}`}>
              <Button 
                variant={this.props.location.pathname === '/' ? 'contained' : 'text'}
                color={this.props.location.pathname === '/' ? 'primary' : 'default'} 
                onClick={() => this.openPage('/')}
                style={{margin: 10}}
              >
                Home
              </Button>
              <Button 
                variant={this.props.location.pathname === '/services' ? 'contained' : 'text'}
                color={this.props.location.pathname === '/services' ? 'primary' : 'default'}
                onClick={() => this.openPage('/services')}
                style={{margin: 10}}
              >
                Services
              </Button>
              <Button 
                variant={this.props.location.pathname === '/about' ? 'contained' : 'text'}
                color={this.props.location.pathname === '/about' ? 'primary' : 'default'}
                onClick={() => this.openPage('/about')}
                style={{margin: 10}}
              >
                About Us
              </Button>
              <Button 
                variant={this.props.location.pathname === '/contact' ? 'contained' : 'text'}
                color={this.props.location.pathname === '/contact' ? 'primary' : 'default'}
                onClick={() => this.openPage('/contact')}
                style={{margin: 10}}
              >
                Contact Us
              </Button>
            </div>
          ) : (
            <div className={`${styles['navigationMobile']}`}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={() => AppStore.openSidebar()}>Menu</Button>
            </div>
          )
        }
        
        {
          AppStore.sidebar.isOpen && this.state.windowWidth < styles.breakpointTwo && (
            <Sidebar />
          )
        }
      </nav>
    );
  }
}
