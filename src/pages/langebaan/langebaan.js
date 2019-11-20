import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import styles from './langebaan.module.scss'

export default class Langebaan extends Component {
  render() {
    return (
      <div className={`${styles['langebaan']}`}>
        <h1 className={`${styles['title']}`}>Langebaan</h1>

        <p>
          Aptly referred to as the 'Jewel of the West Coast', the picturesque town of Langebaan hugs the shores of the Langebaan Lagoon.
        </p>
        <br />
        <p>
          The main attraction is the West Coast National Park (30 000ha), the waters are home to flamingos and a variety of other birds, whales and the park is well known as a paradise for bird watchers.  Game viewing is possible within the park and the historic Geelbek restaurant and tourist centre are worth a visit.
        </p>
        <br />
        <p>
          Dad can enjoy a round of golf at the Langebaan Country Estate, whilst mum can pamper herself with holistic beauty treatments, or browse around the many shops offering everything from curios, clothing, sports gear, home interiors to arts and crafts.  When night falls enjoy live entertainment or try your luck at the Casino at Club Mykonos.
        </p>
        <br/>

        <section className={`${styles['locations']}`}>
          <div className={`${styles['location']}`}>
            <div className={`${styles['map']}`}>
            <iframe title='Langebaan' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3342.695422260265!2d18.030970965190075!3d-33.09079673087838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34aa1d8f53734d%3A0x18c036f8cb7d2d00!2sGerimed%20Langebaan%20cc!5e0!3m2!1sen!2sza!4v1574001394531!5m2!1sen!2sza" />
            </div>
            <div className={`${styles['content']}`}>
              <p>Tel: 022 772 1252 / 1296 / 2385</p>
              <p>Fax: 022 772 2061</p>
              <p>Langebaan Retirement Village, Aftree-Oord, Suffren Street, Langebaan</p>
              <p>P.O. Box 893, Langebaan, 7357</p>
              <br />
              <Button variant='contained' color='primary'>Contact Langebaan Division</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
