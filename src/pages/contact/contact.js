import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import styles from './contact.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';
import ContactModal from '../../components/contactModal/contactModal';
import Callout from '../../components/callout/callout'

@withRouter
export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dialog: {
        isOpen: false
      }
    }

    this.closeDialog = this.closeDialog.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.openPage = this.openPage.bind(this)
  }

  closeDialog() {
    this.setState({
      ...this.state,
      dialog: {
        isOpen: false
      }
    })
  }

  openDialog() {
    this.setState({
      ...this.state,
      dialog: {
        isOpen: true
      }
    })
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page
        title='Gerimed: Contact Us'
        description='You can contact us from this page.'
      >
        <div className={`${styles['contact']}`}>
          <h1 className={`${styles['title']}`}>Contact Us</h1>

          <Callout style={{marginBottom: 25}}>
            <h2>General enquiries</h2>
            <p style={{marginBottom: 10}}>You can contact us directly by filling in the form and we will respond as soon as possible.</p>
            <Button onClick={this.openDialog} variant='contained' color='primary'>Enquiry Form</Button>
          </Callout>

          <section className={`${styles['locations']}`}>
            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Langebaan' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3342.695422260265!2d18.030970965190075!3d-33.09079673087838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34aa1d8f53734d%3A0x18c036f8cb7d2d00!2sGerimed%20Langebaan%20cc!5e0!3m2!1sen!2sza!4v1574001394531!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Langebaan
                </h2>
                <div className={styles['sub-title']}>Gerimed Langebaan cc</div>
                <br />
                <p>Tel: 022 772 1252 / 1296 / 2385</p>
                <p>Fax: 022 772 2061</p>
                <p>Langebaan Retirement Village, Aftree-Oord, Suffren Street, Langebaan</p>
                <p>P.O. Box 893, Langebaan, 7357</p>
                <br />
                <Button variant='contained' color='primary' onClick={() => this.openPage('/langebaan')}>View</Button>
              </div>
            </div>

            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Kleinmond' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.6379134575013!2d19.033504215219118!3d-34.334239550796376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdd998782f7d45%3A0xfc46b306ba2d84ec!2sKogelpark%20Clinic!5e0!3m2!1sen!2sza!4v1574001632011!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Kleinmond
                </h2>
                <div className={styles['sub-title']}>Gerimed Kleinmond Kogelpark Clinic</div>
                <br />
                <p>Tel: 028 271 3994</p>
                <p>Fax: 028 271 3488</p>
                <p>Kogelpark Retirement Village, Botriver Road, Kleinmond</p>
                <p>P.O. Box 585, Kleinmond, 7195</p>
                <br />
                <Button variant='contained' color='primary' onClick={() => this.openPage('/kleinmond')}>View</Button>
              </div>
            </div>
          </section>
          <ContactModal open={this.state.dialog.isOpen} onClose={this.closeDialog} />
        </div>
      </Page>
      
    );
  }
}
