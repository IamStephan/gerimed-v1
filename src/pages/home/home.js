import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import styles from './home.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page
        title='Gerimed'
        description='Gerimed Landing Page'
      >
        <div className={`${styles['home']}`}>
          <div className={`${styles['hero']}`}>
            <div className={`${styles['left']}`}>
              <img alt='Home' src={require('../../static/production/pexels-photo-home.jpg')} />
            </div>
            <div className={`${styles['right']}`}>
              <div className={`${styles['top']}`}>
                <h2 className={`${styles['title']}`}>
                  Personal, Private Care
                </h2>

                <p className={`${styles['content']}`}>
                  Gerimed is a privately owned health care company
                  and leaders at elderly health care in the Western
                  Cape of South Africa
                </p>
                <br />
                <Button onClick={() => this.openPage('/about')} variant='contained' color='primary'>Learn More</Button>
              </div>
              <div className={`${styles['bottom']}`}>
                <h2 className={`${styles['title']}`}>Find your home:</h2>
                <ButtonGroup variant='contained' color='primary' fullWidth>
                  <Button onClick={() => this.openPage('/langebaan')}>Langebaan</Button>
                  <Button onClick={() => this.openPage('/kleinmond')}>Kleinmond</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <div className={`${styles['ass']}`}>
            <h2 className={`${styles['title']}`}>In association with:</h2>

            <div className={`${styles['content']}`}>
              <div className={`${styles['logo']}`}>
                <img alt='sa_dep' src={require('../../static/sa_dep.jpg')} />
              </div>
              <div className={`${styles['logo']}`}>
                <img alt='alz' src={require('../../static/alz.jfif')} />
              </div>
              <div className={`${styles['logo']}`}>
                <img alt='bhf' src={require('../../static/bhf.jpg')} />
              </div>
              <div className={`${styles['logo']}`}>
                <img alt='saaa' src={require('../../static/saaa.png')} />
              </div>
            </div>
          </div>
        </div>
      </Page>
      
    );
  }
}
