import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Divider, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

import styles from './footer.module.scss';

@withRouter
export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
    this.openTab = this.openTab.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  openTab(url) {
    window.open(url)
  }

  render() {
    return (
      <footer className={`${styles['footer']}`}>
        <div className={`${styles['places']}`}>
          <section className={`${styles['section']}`}>
            <h2>Gerimed Mobility</h2>
            <p>844@Oostewal Building, Oostewal Rd</p>
            <p>Langebaan, 7357</p>
            <br />
            <p>Tel: 022 772 1273</p>
            <p>Cell: 082 079 4173</p>
            <br />
            <Button variant='contained' color='primary' onClick={() => this.openTab('https://gerimedmobility.netlify.com')}>Visit shop</Button>
          </section>
          <section className={`${styles['section']}`}>
            <h2>Gerimed Langebaan</h2>
            <p>Langebaan Retirement</p>
            <p>Village, Aftree-Oord</p>
            <br />
            <p>Tel: 022 772 1252 / 2385</p>
            <p>Fax: 022 772 2061</p>
            <br />
            <Button variant='contained' color='primary' onClick={() => this.openPage('/langebaan')}>Learn more</Button>
          </section>
          <section className={`${styles['section']}`}>
            <h2>Gerimed Kleinmond</h2>
            <p>Kogelpark Retirement</p>
            <p>Village, Botrivier Road</p>
            <br />
            <p>Tel: 028 271 3994</p>
            <p>Fax: 028 271 3488</p>
            <br />
            <Button variant='contained' color='primary' onClick={() => this.openPage('/kleinmond')}>Learn more</Button>
          </section>
        </div>

        <Divider style={{backgroundColor: 'dimgrey'}} />

        <div className={`${styles['more-info']}`}>
          <section className={`${styles['section']}`}>
            <Button variant='text' color='inherit'>© Gerimed 2019</Button>
            <Button variant='text' color='inherit'>Sitemap</Button>
          </section>

          <Button variant='contained' color='primary' onClick={() => this.openTab('https://www.facebook.com/pages/Gerimed/190603021070025')}>
            <FacebookIcon />
          </Button>
        </div>
      </footer>
    );
  }
}
